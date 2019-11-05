import turtle
import math


def drawline(ttl, x1, y1, x2, y2):
    ttl.penup()
    ttl.goto(x1, y1)
    ttl.pendown()
    ttl.goto(x2, y2)
    ttl.penup()


def drawfunc(ttl, begin, end, step, wh, hh):
    t = begin
    while t < end:
        x = (wh / 4) * (-2 * math.sin(2 * t) + math.sin(t))
        y = (hh / 4) * (-2 * math.cos(2 * t) + math.cos(t)) - 10
        ttl.goto(x, y)
        if y > 0:
            ttl.pencolor('red')
        else:
            ttl.pencolor('green')
        ttl.pendown()
        x = (wh / 4) * (-2 * math.sin(2 * t) + math.sin(t))
        y = (hh / 4) * (-2 * math.cos(2 * t) + math.cos(t)) + 10
        ttl.goto(x, y)
        ttl.penup()
        t += step


def main():
    turtle.setup(600, 600, 0, 0)
    ttl = turtle.Turtle()
    drawline(ttl, -300, 0, 300, 0)
    drawline(ttl, 0, 300, 0, -300)

    drawfunc(ttl, 0, 2 * math.pi, 0.01, 300, 300)


if __name__ == "__main__":
    main()
