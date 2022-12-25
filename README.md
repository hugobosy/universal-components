`React` `Styled-components` `TypeScript`

# Uniwersalne komponenty React

### Paczka będzie na bieżąco rozwijana o nowe właściwości dla każdego z komponentów

1. [Button](#Button)
2. [Parallax](#Parallax)
3. [Link](#Link)
4. [Socials](#Socials)
5. [Navigation](#Navigation)
6. [Accordion](#Accordion)

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

### Przykładowy sposób użycia:

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

### Przykładowy sposób użycia:

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

### Przykładowy sposób użycia:

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

## Socials

> Właściwości, które posiada komponent:

- `facebook`, `twitter`, `instagram`, `linkedin`, `pinterest`, `youtube` -> nazwy social mediów
  - `icon` -> element JSX - komponent ikony
  - `href` -> adres do social media
- `size` -> wielkość ikony
- `transition` -> czas przejścia na stan hover
- `hover` -> stan przejścia
  - `fill` -> zmiana koloru ikony

### Przykładowy sposób użycia:

```
<SocialsComponent
  facebook={{
    icon: <FaFacebookF />,
    href: "http://facebook.com",
  }}
  twitter={{
    icon: <FaTwitter />,
    href: "http://twitter.com",
  }}
  instagram={{
    icon: <FaInstagram />,
    href: "http://instagram.com",
  }}
  linkedin={{
    icon: <FaLinkedinIn />,
    href: "http://linkedin.com",
  }}
  size={media ? 25 : 15}
  hover={{ fill: "gold" }}
  transition={0.4}
/>
```

---

## Navigation

> Właściwości, które posiada komponent:

- `positionBlock` -> pozycjonowanie całego bloku nawiagacji - dostępne opcje pozycjonowania: `relative`, `absolute`, `fixed`, `sticky`, `static`
- `position` -> pozycjonowanie pojedynczego linku - opcje te same co wyżej
- `links` -> tutaj wstawiamy tablicę obiektów - patrz w przykładowy sposobie użycia
- `isColumn`' -> czy nawigacja ma być pionowa
- `gap` -> odległości pomiędzy linkami (w pionie i poziomie)
- `fontFamily` -> rodzina fontów dla linku
- `hover` -> efekt najechania na link myszką
- `transition` -> animacja przejscia na efekt hover
- `color` -> kolor czcionki

### Przykładowy sposób użycia:

```
<NavigationComponent
  links={[
    { name: "Strona główna", link: "home.html" },
    { name: "Produkty", link: "products.html" },
    { name: "Kontakt", link: "contact.html" },
  ]}
  transition={0.4}
  gap="20px"
  position="relative"
  positionBlock="static"
  hover={{ isUnderline: true }}
  color="#BCC222"
  fontFamily="Verdana, sans-serif"
/>
```
---

## Accordion

> Właściwości, które posiada komponent:

- `accordionItems` -> tablica obiektów - patrz w sposób użycia
- `maxWidth` -> maksymalna szerokość komponentu (width: 100%)
- `heightContent` -> wysokość zawartości contentu
- `bgHeader` -> tło nagłówka
- `margin` -> margines komponentu
- `padding` -> paddingi nagłówka i contentu (są takie same)
- `fontWeight` -> grubość czcionki
- `fontFamily` -> rodzina fontów
- `fontSize` -> wielkość czcionki
- `color` -> kolor czcionki
- `customCss` -> niestandardowe style css dla całego komponentu
- `customHeader` -> niestandardowe style dla nagłówka
- `customContent` -> niestandardowe style dla contentu

### Przykładowy sposób użycia:

```
<AccordionComponent
  accordionItems={[
    {
      header: "Title1",
      content: <h1>Witaj</h1>,
    },
    {
      header: "Title2",
      content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      header: "Title3",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ]}
  maxWidth="480px"
  heightContent="180px"
  bgHeader="#473829"
  padding="10px"
  margin="10px 0"
  customCss="font-family: verdana; color: red; font-size: 3rem; font-weight: bold; border: 1px solid black; border-radius: 10px;"
  customHeader="color: green; font-size: 12px;"
  customContent="color: black; font-size: 10px; font-weight: normal;"
```

---

[MIT](https://choosealicense.com/licenses/mit/)