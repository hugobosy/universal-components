`React` `Styled-components` `TypeScript`
# Uniwersalne komponenty React

1. [Button](##Button)

---

## Button

>Właściwości, które posiada komponent:

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

[MIT](https://choosealicense.com/licenses/mit/)