import os
import math
import turtle
import time

# heart parametric equations
def hearta(k):
    return 15 * math.sin(k)**3

def heartb(k):
    return 12*math.cos(k) - 5*math.cos(2*k) - 2*math.cos(3*k) - math.cos(4*k)

# setup screen
turtle.speed(5)
turtle.bgcolor("black")
turtle.color("red")
turtle.pensize(2)
turtle.hideturtle()
turtle.fillcolor("red")

# animate the heart
turtle.penup()
turtle.goto(hearta(0) * 20, heartb(0) * 20)
turtle.pendown()
turtle.begin_fill()
for i in range(600):
    x = hearta(i/100) * 20
    y = heartb(i/100) * 20
    turtle.goto(x, y)
    time.sleep(0.01)
turtle.end_fill()

# Show "I Love You" at the center
turtle.penup()
turtle.goto(0, -20)
turtle.color("white")
turtle.write("Amma (^_^)", align="center", font=("Arial", 40, "bold"))

turtle.done()
os.system("curl ascii.live/ric")
