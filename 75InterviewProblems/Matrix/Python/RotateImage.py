class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        for i in range(0,(len(matrix) // 2)):
            for j in range(i,len(matrix[i])-1-i):
                point1 = matrix[i][j]
                point2 = matrix[j][len(matrix)-1 - i]
                point3 = matrix[len(matrix) -1 - i][len(matrix)-1-j]
                point4 = matrix[len(matrix) -1 -j][i]

                matrix[i][j] = point4
                matrix[j][len(matrix)-1 - i] = point1
                matrix[len(matrix) -1 - i][len(matrix)-1-j] = point2
                matrix[len(matrix) -1 -j][i] = point3
