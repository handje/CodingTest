n=int(input())
time=list(map(int,input().split()))
time.sort()

sumOfTime=0

for i in range(n):
    for k in range(0,i+1,1):
        sumOfTime+=time[k]

print(sumOfTime)