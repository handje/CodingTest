n=int(input())
A=list(map(int,input().split()))
B=list(map(int,input().split()))

A.sort()

Min_Sum=0

for i in range(n):
    Min_Sum+=A[i]*max(B)
    B.remove(max(B))

print(Min_Sum)