# Handover WOGO 🍸

Dit bestand bevat informatie over het voortzetten van het **WOGO** project. WOGO Cocktailwalks organiseert culinaire wandeltochten waarbij de deelnemers verschillende horecagelegenheden bezoeken. Tijdens deze tochten worden speciaal samengestelde cocktails geserveerd op elke locatie. 

## Huidige status 

- Momenteel hebben alle pagina's een redesign gekregen en zijn deze ontwikkeld, met uitzondering van de giftcard pagina. 
- De component library is ingedeeld volgens het Atomic Design, waardoor dit overzichtelijk en onderhoudbaar is.
- De CMS (Contentful) is volledig ingericht en laadt alle benodigde data correct in, behalve dat niet alles dynamisch wordt veranderd wanneer iets wordt aangepast qua volgorde (homepage componenten) of het verwijderen/toevoegen van een nieuwe tourcard.

## Belangrijkste features die al werken

- De bookingsform: gebruikers kunnen een formulier invullen om een groepsboeking te maken en deze informatie wordt getoond in Contentful.
- Alle teksten en afbeeldingen worden dynamisch ingeladen vanuit Contentful.
- De navigation bar werkt volledig responsive en werkt ook zonder JS.

## Wat zijn de grootste aandachtspunten / uitdagingen?

- Carrousel:
  - Het responsive en toegankelijk maken van de carrousel op de homepagina
 
- Data dynamisch maken:
  - Er wordt al data ingeladen vanuit Contentful en dit is ook aan te passen, alleen is dit niet dynamisch genoeg dat de volgorde van componenten (bv. op de homepagina) veranderd kan worden, anders werkt de site niet meer. Bovendien kunnen er momenteel ook nog niet meer tours toegevoegd worden en dit is essentieel.

## Wat wordt aangeraden als eerste stap voor het team?

- Codebase & database: voordat er gecodeerd wordt probeer eerst met het team te kijken met elkaar hoe het in elkaar zit en hoe de data wordt opgehaald. 
- Carrousel: ontwikkel een carrousel die werkt op alle devices en toegankelijk is voor alle gebruikers
- Dynamische data: ervoor zorgen dat alle data volledig dynamisch is zodat ook de cards toegevoegd/verwijderd kunnen worden en volgorde van items veranderd kunnen worden. 
- Filter: het implementeren van een (tab)filter op de tours pagina, zodat gebruikers kunnen filteren aan de hand van verschillende steden (het design staat er al)
