import random
lis = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
cua = int(input("¿Cuantas contraseñas quieres? "))
car = int(input("De cuantos caracteres? "))

caracteres = []

cont = 0

while cont <= car:
	caracter = random.choice(lis)
	caracteres.append(caracter)
	cont = cont + 1

print (', '.join(caracteres))




