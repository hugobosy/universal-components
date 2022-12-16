`React` `Styled-components` `TypeScript`

# Uniwersalne komponenty React

### Paczka będzie na bieżąco rozwijana o nowe właściwości dla każdego z komponentów

1. [Button](#Button)
2. [Parallax](#Parallax)
3. [Link](#Link)

---

## Button

> Właściwości, które posiada komponent:

- `text` -> wyświetla tekst na buttonie (required)
- `bgColor`-> tło przycisku
- `fontFamily` -> rodzina czcionki
- `fontcolor` -> kolor czcionki
- `border` -> właściwość obramowania
- `isUppercase` -> czy tekst ma być wielkimi literami
- `display` -> jaki ma być display (np. `block`)
- `padding` -> padding przycisku
- `radius` -> zaokrąglenia rogów
- `shadow` -> cień przycisku
- `transition` -> jaka ma być długość przejścia
- `hover` -> właściwości najechania na przycisk myszką:
    - `bgColor` -> zmiana koloru tła
    - `fontColor` -> zmiana koloru czcionki
    - `padding` -> zmiana paddingów
    - `radius` -> zmiana zaokrągleń rogów
    - `shadow` -> zmiana cieni
- `onClick` -> obsługa zdarzenia click

## Przykładowy sposób użycia:

```
<ButtonComponent
text="This is universal button"
display="block"
bgColor="blue"
fontFamily="Verdana, sans-serif"
fontColor="#CCC"
border="none"
isUppercase
padding="10px 30px"
radius="8px 3px 18px 29px"
shadow="2px 2px 5px 0px rgba(0,0,0,.5)"
transition={0.4}
hover={{
  fontColor: "#CCC",
  bgColor: "#000",
  radius: "3px 2px 3px 3px",
  shadow: "5px 5px 10px rgba(0,0,0,1)",
  padding: "20px 50px",
  onClick={exampleHandleFunction}
}}
/>
```

---

## Parallax

> Właściwości, które posiada komponent:

- `width` -> szerokość
- `height` -> wysokość
- `IsOverlay` -> czy ma być nakładka
    - `bgColor` -> kolor nakładki
    - `opacity` -> przezroczystość koloru nakładki
- `image` -> obrazek tła

## Przykładowy sposób użycia:

```
<ParallaxComponent
  width="100%"
  height="400px"
  isOverlay={{ bgColor: "#000", opacity: 0.5 }}
  image="https://cdn.pixabay.com/photo/2018/12/13/22/34/nots-3873894__480.jpg"
 >
   <div>
     <h1>Parallax</h1>
   </div>
</ParallaxComponent>
```

---

## Link

> Właściwości, które posiada komponent:

- `href` -> adres linku do strony
- `text` -> tekst linku
- `width` -> szerokość linku (link posiada display: block);
- `fontFamily` -> rodzaj czcionki linku
- `fontColor` -> kolor czcionki linku
- `isUppercase` -> czy tekst ma być wielkimi literami
- `isUnderline` -> czy tekst ma byc podkreślony (domyślnie tekst jest podkreślony gdy nie zmienimy tego w stylach globalnych)
- `hover` -> właściwości które możemy nadać gdy najedziemy na link myszką
  - `bgColor` -> kolor tła
  - `fontWeight` -> grubość czcionki
  - `radius` -> zaokrąglenie rogów
  - `isUnderline` -> czy tekst ma być podkreslony
  - `border` -> obramowanie linku
  - `textShadow` -> cień tekstu
- `fontWeight` -> grubość czcionki
- `isItalic` -> czy tekst ma być pochylony
- `padding` -> paddingi
- `border` -> obramowanie linku
- `bgColor` -> tło linku
- `transition` -> czas przejścia stanu
- `radius` -> zaokrąglenia rogów
- `textalign` -> pozycja tekstu (left, center, right)
- `textShadow` -> cień tekstu

## Przykładowy sposób użycia:

```
<LinkComponent
  href="http://www.google.pl"
  text="Link"
  width="10%"
  fontFamily="Verdana, sans-serif"
  fontColor="#567567"
  isUppercase
  fontWeight={700}
  isItalic
  padding="10px 30px"
  transition={0.4}
  border="2px solid blue"
  textAlign="center"
  radius="30px 5px 10px 20px"
  bgColor="#777"
  textShadow="0 0 3px rgba(0,0,0,1)"
  hover={{
    bgColor: "#CCC",
    border: "1px solid red",
    radius: "2px 5px 8px 30px",
    isUnderline: true,
    fontWeight: 400,
    textShadow: "0 0 20px red",
  }}
/>
```

---

[MIT](https://choosealicense.com/licenses/mit/)