def Navegador(object):
	def __init__ (self):
		self.tabs = [""]

	def abrir (self):
		self.abierto = True 

	def cerrar (self):
		self.abierto = False 

	def agregar_tabs (self, url):
		self.tabs.append(url)
		return self.tabs

	def cerrar_tabs (self):
		self.tabs.pop(qui)
		return self.tabs
