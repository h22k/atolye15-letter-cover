# Atölye15 için yazılan Letter Cover API.

/helper => helper dosyalarının ve Canvas sınıfının olduğu klasör. Canvas sınıfı ekrana şekil çizmeye yarıyor.

/middleware => middleware'lerin olduğu klasör. 

/shapes => Canvas sınıfından extend edilen sınıflar, az sonra bahsedilecek olan `shape` parametresinin kabul ettiği değerli gösteriyor.

/bin => sunucuyu ayağa kaldıran _**[www.js]()**_ dosyası burada.

## API

İşlem çok basit, gereken parametreler [name, shape, size]

__NAME__ = 'required - min:2 words - not contains number'

__SHAPE__ = 'optional: default circle - just circle or rectangle for now'

__SIZE__ = 'optional: default 75 - max: 1920'

___

### İşlemler

#### Gereksinimler
* Node.js = 16.13.0
* NPM = 8.1.4
* Sistem gereksinimleri:
    * MacOs = pkg-config cairo pango libpng jpeg giflib librsvg
    * Ubuntu = install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev
    * Windows = [Göz at](https://github.com/Automattic/node-canvas/wiki/Installation:-Windows)

Aslında Docker eklemeyi düşündüm lakin, heroku üzerinden paylaştığım için gerek duymadım. Her isme göre renk üretiyor (büyük-küçük duyarlı değil). Üretilen renge göre yazı rengi beyaz ya da siyah oluyor.

#### Kullanım

###### BASEURL = 'https://nameless-ocean-22992.herokuapp.com/'

Gerekli validasyonlar sağlanmazsa, response type olarak application/json dönüyor.
Gerekli validasyonlar sağlandığı taktirde ise image/png olarak dönüyor.

##### Örnek kullanım
[Örnek kullanım için tıklayın](https://nameless-ocean-22992.herokuapp.com/?name=Atolye%20Onbes&size=200)

