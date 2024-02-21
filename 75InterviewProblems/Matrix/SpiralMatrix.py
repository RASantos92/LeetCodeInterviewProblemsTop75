from ast import List


class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        leftBounds = 0
        rightBounds = len(matrix[0])
        topBounds = 0
        bottomBounds = len(matrix)
        output = []
        while leftBounds < rightBounds and topBounds < bottomBounds:
            # get every i in the top row
            for i in range(leftBounds,rightBounds):
                output.append(matrix[topBounds][i])
            topBounds += 1
            # get every i in the right col
            for i in range(topBounds, bottomBounds):
                output.append(matrix[i][rightBounds -1])
            rightBounds -= 1
            # this makes sure that we are still in bounds after moving top and right bounds
            if not (leftBounds < rightBounds and topBounds < bottomBounds):
                break
            # get every i in the bottom row
            for i in range(rightBounds-1, leftBounds-1, -1):
                output.append(matrix[bottomBounds-1][i])
            bottomBounds -= 1
            # get every i in the left col
            for i in range(bottomBounds -1, topBounds -1, -1):
                output.append(matrix[i][leftBounds])
            leftBounds += 1
        return output

