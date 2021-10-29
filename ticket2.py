#!/usr/bin/env python3

from itertools import permutations
import os
import random
import sys

from PIL import Image, ImageDraw, ImageFont

class RowPatterns:
    def get_row_patterns(self, number_of_rows):
        pattern = [-1, -1, -1, -1, -1, 0, 0, 0, 0]
        choices = list(permutations(pattern))
        selected = self.patterns
        while len(selected) < number_of_rows:
            choice = random.choice(choices)
            if self.__is_pattern_usable(choice, selected):
                selected.append(list(choice))
            choices.remove(choice)

    def __is_pattern_usable(self, new_row, patterns):
        selected = patterns
        for j in range(self.cols):
            col = []
            for row in selected:
                col.append(row[j])
            col.append(new_row[j])
            if len(col) > 8 and col.count(0) > self.cols:
                return False
        return True

    def generate_ranges(self, num_of_ranges):
        ranges = []
        for idx in range(num_of_ranges):
            start, end = 1, 10
            if idx > 0:
                start, end = 10 * idx, (10 * idx) + 10
            ranges.append(list(range(start, end)))
        self.ranges = ranges

class Strip(RowPatterns):
    NUMBER_OF_TICKETS = 6

    def __init__(self):
        self.rows = 3
        self.cols = 9
        self.ranges = []
        self.patterns = []
        self.tickets = []

    def generate(self):
        # self.generate_ranges(self.cols)
        # self.get_row_patterns(self.NUMBER_OF_TICKETS * self.rows)
        # start, end = 0, self.rows
        for idx in range(self.NUMBER_OF_TICKETS):
            # print(f"Ticket number {idx+1}")
            # for pattern in self.patterns[start:end]:
            #     print(pattern)
            ticket = Ticket(
                self.rows,
                self.cols,
                # patterns=self.patterns[start:end],
                # ranges=self.ranges
            )
            # print(ticket.patterns)
            # print("*" * 80)
            # print(self.ranges)
            ticket.generate()
            self.tickets.append(ticket)
            # start, end = end, end + self.rows

class Ticket(RowPatterns):
    def __init__(self, rows, cols, patterns=None, ranges=None):
        self.rows = rows
        self.cols = cols
        self.patterns = []
        if patterns is not None:
            # print("patterns if")
            # print(self.patterns)
            if len(patterns) == rows and len(patterns[0]) == cols:
                self.patterns = patterns
            else:
                raise ValueError("Invalid Row Patterns")
            # print(self.patterns)
        else:
            # print("patterns else")
            # print(self.patterns)
            self.get_row_patterns(rows)
            # print(self.patterns)

        self.ranges = []
        if ranges is not None:
            # print("ranges if")
            # print(self.ranges)
            if len(ranges) == cols:
                self.ranges = ranges
            else:
                raise ValueError("Invalid Ranges")
            # print(self.ranges)
        else:
            # print("ranges else")
            # print(self.ranges)
            self.generate_ranges(cols)
            # print(self.ranges)

        self.ticket = self.patterns

    def __str__(self):
        lines = []
        for row in self.ticket:
            line = ""
            for value in row:
                val = str(value) if value > 0 else "  "
                val = f" {val}" if len(val) < 2 else val
                line += f" {val} "
            lines.append(line)
        return "\n".join(lines)

    def __repr__(self):
        return self.__str__()

    def generate(self):
        self.fill_column_values()
        self.sort_ticket_columns()

    def fill_column_values(self):
        positions_to_fill = self.get_positions_to_fill()
        for row, col in positions_to_fill:
            col_range = self.ranges[col]
            value = random.choice(col_range)
            self.ticket[row][col] = value
            col_range.remove(value)

    def sort_ticket_columns(self):
        for j in range(9):
            col = []
            for row in self.ticket:
                if row[j] != 0:
                    col.append(row[j])
            col.sort()
            for row in self.ticket:
                if row[j] != 0:
                    row[j] = col.pop(0)

    def get_positions_to_fill(self):
        positions_to_fill = []
        for rIdx, row in enumerate(self.patterns):
            for cIdx, val in enumerate(row):
                if val == -1:
                    positions_to_fill.append((rIdx, cIdx))
        return positions_to_fill

    def _gen_lines(self):
        lines = []
        seperator = "+" + "----+" * self.cols
        lines.append(seperator)
        for row in self.ticket:
            line = "|"
            for val in row:
                out = str(val) if val > 0  else "  "
                out = out if len(out) == 2 else f" {out}"
                line += f" {out} |"
            lines.append(line)
            lines.append(seperator)
        return lines

    def grid(self):
        lines = self._gen_lines()
        for line in lines:
            print(line)

    def image(self, filename):
        content = '\n'.join(self._gen_lines())
        # im = Image.new('RGBA', (900, 250), (48, 10, 36, 255))
        im = Image.new('RGBA', (900, 250), (0, 0, 0, 255))
        draw = ImageDraw.Draw(im)
        fontsFolder = '/usr/share/fonts/gnu-free'
        monoFont = ImageFont.truetype(os.path.join(fontsFolder, 'FreeMono.ttf'), 32)
        draw.text((10, 10), content, fill='white', font=monoFont)
        im.save(filename)

    def json(self):
        out = {}
        out['totalRows'] = self.rows
        out['colsPerRow'] = self.cols
        out['data'] = []
        for i in range(self.rows):
            for j in range(self.cols):
                d = {
                    "row": i,
                    "col": j,
                    "val": str(self.ticket[i][j]) if self.ticket[i][j] > 0 else ""
                }
                out['data'].append(d)
        return out


if __name__ == '__main__':
    no_of_tickets = int(sys.argv[1])

    for i in range(no_of_tickets):
        t = Ticket(3, 9)
        t.generate()
        t.grid()
        t.image(f"ticket{i}.png")
        print()

    # for ticket in s.tickets:
    #     ticket.grid()
    #     # print(ticket.json())
    #     print("*" * 50)
