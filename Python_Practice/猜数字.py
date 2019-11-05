import random

a = random.randint(1, 100)
guess = int(input("输入你的猜测："))
s = 0
while s == 0:
    if a > guess:
        print("猜小了！")
        guess = int(input("再猜一次："))
        s += 0
    elif a < guess:
        print("猜大了！")
        guess = int(input("再猜一次："))
        s += 0
    else:
        print("猜对了！")
        s += 1
