
def arithmetic_arranger(problems):
    if(len(problems) > 5):
        return "Error: Too many problems."
    for i in range(len(problems)):
        op = problems[i].split()
        size1 = len(op[0])
        size2 = len(op[2])
        iterator = size1 + 2 if size1 > size2 else size2 + 2
        print(op[0].rjust(iterator + i * 4))
        print(op[1].rjust(i * 4), op[2].rjust(iterator-1 + i * 4))
        dashes = '-'
        for j in range(iterator-1):
            dashes += '-'
        print(dashes.rjust(iterator + i * 4), end='')
    print('')


arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])
