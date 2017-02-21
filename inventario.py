productos = []
cantidades = []

des = int(input("Desea ingresar un producto? " '\n' "1. Si" '\n' "2. No" '\n'))

while des == 1:
	producto = input("Ingrese el producto: ")
	productos.append(producto)

	cantidad = int(input("¿Cuantos de ese producto hay? "))
	cantidades.append(cantidad)

	des = int(input("Desea ingresar un producto? " '\n' "1. Si" '\n' "2. No" '\n'))

i = 0
for i in productos:
	print (productos ,  cantidades[i])
	i = i + 1