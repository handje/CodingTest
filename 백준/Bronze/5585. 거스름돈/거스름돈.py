change=[500,100,50,10,5,1]

money=int(input())
money=1000-money

count=0

for i in range(len(change)):
    if(money<=0): break
    
    count+=money//change[i]
    money%=change[i]

print(count)
