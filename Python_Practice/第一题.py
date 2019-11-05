from tkinter import *
import math

root = Tk()
w = Canvas(root, width=400, height=400)
w.pack()
w0 = 200
h0 = 200
w.create_line(0, 200, 400, 200, fill='red')
w.create_line(200, 0, 200, 400, fill='red')


def x(t):
    x = t * 80
    x += w0
    return x


def y(t):
    y = (-3 * t ** 3 - 3 * t ** 2 + 4 * math.sin(t)) * 35
    y -= h0
    y = -y
    return y


t = -1.7

while t < 1.7:
    if x(t) > w0 and y(t) < h0:
        w.create_line(w0, h0, x(t), y(t))
    elif x(t) < w0 and y(t) < h0:
        w.create_line(w0, h0, x(t), y(t), fill='red')
    elif x(t) < w0 and y(t) > h0:
        w.create_line(w0, h0, x(t), y(t), fill='green')
    else:
        w.create_line(w0, h0, x(t), y(t), fill='blue')
    t += 0.02

root.mainloop()
