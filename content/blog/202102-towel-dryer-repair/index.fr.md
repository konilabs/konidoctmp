+++
title = "Réparation d'un sèche-serviettes Airelec Indigo"
linktitle = "Réparation d'un sèche-serviettes Airelec Indigo"

date = 2021-02-10T22:10:00Z
lastmod = 2021-02-10T22:10:00Z

tags= ["repair"]
authors = ["nicolas-perrin"]
blogarchives = "2021-02"

keywords = ["reparation", "chauffage", "seche", "serviette", "démontage", "schema"]
description = "Réparation et reverse engineering d'un sèche-serviettes Airelec Indigo"

slug = "reparation-seche-serviettes-airelec-indigo"

[[resources]]
  name = "cover"
  src = "towel-dryer-repair-cover.jpg"
  title = "Réparation d'un radiateur sèche-serviettes Airelec Indigo"
  [resources.params]
    alt = "Réparation d'un radiateur sèche-serviettes Airelec Indigo"

[[resources]]
  src = "airelec-towel-dryer-airelec-noirot-indigo.jpg"
  title = "Radiateur sèche-serviettes Airelec Indigo"
  [resources.params]
    alt = "Vue de face du radiateur sèche serviettes Airelec Indigo"

[[resources]]
  src = "airelec-indigo-cablage.jpg"
  title = "Schéma de câblage de la carte électronique"
  [resources.params]
    alt = "Schéma de câblage de la carte électronique Airelec Indigo"

[[resources]]
  src = "airelec-indigo-pcb-back.jpg"
  title = "Face arrière de la carte contrôleur"
  [resources.params]
    alt = "Face arrière de la carte électronique contrôleur"
    gallery = "pcb"
    id = 0

[[resources]]
  src = "airelec-indigo-pcb-front.jpg"
  title = "Face avant de la carte contrôleur"
  [resources.params]
    alt = "Face avant de la carte électronique contrôleur"
    gallery = "pcb"
    id = 1

[[resources]]
  src = "pcb-top-red.jpg"
  title = "Face avant"
  [resources.params]
    alt = "Face avant de la carte électronique contrôleur teintée en rouge"

[[resources]]
  src = "pcb-back-blue.jpg"
  title = "Face arrière"
  [resources.params]
    alt = "Face arrière de la carte électronique contrôleur teintée en bleu"

[[resources]]
  src = "pcb-combined.jpg"
  title = "Face avant et arrière"
  [resources.params]
    alt = "Face avant et arrière de la carte électronique contrôleur combinées"

[[resources]]
  src = "microchip-pic16f628a.pdf"
  title = "Datasheet microcontrôleur Microchip PIC16F628A"

[[resources]]
  src = "airelec-indigo-schematic.pdf"
  title = "Schéma électrique carte Airelec Indigo (PDF)"

[[resources]]
  src = "airelecindigo-schematic-kicad.zip"
  title = "Schéma électrique carte Airelec Indigo (Kicad)"

[[resources]]
  src = "airelec-indigo-schematic.png"
  title = "Schéma électrique carte Airelec Indigo"
  [resources.params]
    alt = "Schéma électrique de la carte du sèche-serviettes Airelec Indigo"

[[resources]]
  src = "airelec-indigo-power-supply.png"
  title = "Fonctionnement de la partie alimentation"
  [resources.params]
    alt = "Schéma d'explication de la partie alimentation Airelec Indigo"

[[resources]]
  src = "mesure-temperature.png"
  title = "Mesure de la température"
  [resources.params]
    alt = "Schéma d'explication de la mesure de la température"
    gallery = "measure"
    id = 0

[[resources]]
  src = "mesure-potentiometre.png"
  title = "Mesure du potentiomètre"
  [resources.params]
    alt = "Schéma d'explication de la mesure du potentiomètre"
    gallery = "measure"
    id = 1

[[resources]]
  src = "decharge-condensateur.png"
  title = "Décharge des condensateurs"
  [resources.params]
    alt = "Schéma d'explication de la décharge des condensateurs"
    gallery = "measure"
    id = 2

[[resources]]
  src = "ordres-fil-pilote.jpg"
  title = "Liste des ordres du fil pilote"
  [resources.params]
    alt = "Tableau listant les ordres du fil pilote"

[[resources]]
  src = "component-tester.jpg"
  title = "Testeur de composant ATMega"
  [resources.params]
    alt = "Testeur de composants ATMega"

[[resources]]
  src = "capacitor-measure.jpg"
  title = "Mesure du condensateur C1"
  [resources.params]
    alt = "Testeur de composants ATMega en cours de mesure du condensateur C1"

[[resources]]
  src = "st-t435-triac.pdf"
  title = "Datasheet triac ST T435"

[[resources]]
  src = "commande-resistance-chauffante.png"
  title = "Schéma de la commande de la résistance chauffante"
  [resources.params]
    alt = "Schéma de la commande de la résistance chauffante"

[[resources]]
  src = "commande-resistance-soufflerie.png"
  title = "Schéma de la commande de la résistance et de la soufflerie"
  [resources.params]
    alt = "Schéma de la commande de la résistance et de la soufflerie"

[[resources]]
  src = "optotriac-moc3023md.pdf"
  title = "Datasheet OptoTriac MOC3023MD"

[[resources]]
  src = "omron-relay-g5ca.pdf"
  title = "Datasheet Relais Omron G5CA"

[[resources]]
  src = "fil-pilote.png"
  title = "Schéma de la partie fil pilote"
  [resources.params]
    alt = "Schéma d'explication de la partie fil pilote Airelec Indigo"
+++

Nouvel article et nouvelle réparation. Cette fois, je vais m'attaquer à un sèche-serviettes que mon père m’a confié. Il s'agit d'un modèle Airelec Indigo, aussi vendu sous la marque Noirot.

Ce radiateur propose deux fonctions. Un mode convecteur simple avec une résistance électrique ainsi qu'un mode "marche forcée" permettant de réchauffer rapidement une salle de bain lorsque l'on va prendre une douche.
En mode marche forcée, le radiateur active une seconde résistance et une soufflerie.

Le radiateur fonctionne parfaitement en mode classique, mais lorsque l'on active le mode "marche forcée" la soufflerie se met en marche environ deux secondes, puis s'éteint, puis redémarre deux secondes et ainsi de suite.
Au bout de plusieurs minutes, la soufflerie finit par s'établir en continu.
À première vue, on peut penser à un problème d'alimentation ou de reset d'un composant.

<!--more-->

{{< img src="airelec-towel-dryer-airelec-noirot-indigo.jpg" >}}

En démontant l'appareil, tout d'abord on se rend compte de la bonne qualité de l'ensemble, c'est du solide !
Il n'y a aucune électronique à part une carte contrôleur.
Nous allons donc nous intéresser ici à la manière dont j'ai pu dépanner la carte (oui... spoiler j'ai réussi :grin: )

## Connexions de la carte électronique

{{< img src="airelec-indigo-cablage.jpg" preset="med">}}

Le système est plutôt simple et de bon gout.
La carte électronique est composée d'un microcontrôleur, qui commute deux relais.  
L'un sert à commander la résistance de chauffage "classique", le second commande la résistance "marche forcée".  
Le potentiomètre permet de régler la température.  
Il y a trois boutons poussoirs, celui tout à gauche sert de bouton de mise en marche, les deux sur la droite permettent d'activer la marche forcée  
Une entrée fil pilote permet de commander le radiateur à partir d'une centrale (Mode confort, éteint, éco, etc..)  
Pour finir, un capteur de température permet de mesurer la température ambiante de la pièce et de réguler le chauffage.

## Traçage du schéma

{{< imginline >}}
{{< img src="airelec-indigo-pcb-front.jpg" >}}
{{< img src="airelec-indigo-pcb-back.jpg" >}}
{{< /imginline >}}

Une bonne nouvelle lorsque l'on regarde la carte électronique, c'est qu'elle semble simple.  
On remarque rapidement qu'il n'y a que deux couches de cuivre, en exposant la carte à une lumière forte et en regardant à travers.  
Je vais donc pouvoir facilement retracer le schéma. Pour cela j'utilise une technique simple qui consiste à prendre une photo du dessus de la carte ainsi qu'une photo du dessous. Ensuite, j'applique un filtre de couleur rouge sur la partie supérieure de la carte et un filtre de couleur bleue sur la partie inférieure. Le but étant de me retrouver avec une vue semblable à un logiciel de routage.

{{< imghover
"pcb-top-red.jpg"
"pcb-back-blue.jpg"
"pcb-combined.jpg" >}}

Fichiers originaux :

- {{< file src="pcb-top-red.jpg" >}}
- {{< file src="pcb-back-blue.jpg" >}}
- {{< file src="pcb-combined.jpg" >}}

Avec un peu d'huile de coude et de patience, en suivant les pistes on arrive au schéma suivant :

{{< img src="airelec-indigo-schematic.png" >}}

Je n'ai pas pris la peine de mesurer les valeurs de tous les petits condensateurs céramiques, car il aurait fallu les démonter un à un pour les mesurer hors du circuit.

Fichiers originaux :

- {{< file src="airelec-indigo-schematic.pdf" >}}
- {{< file src="airelecindigo-schematic-kicad.zip" >}}

## Fonctionnement du schéma

Ici, je vais expliquer le fonctionnement des principales parties du schéma. Globalement, le schéma est vraiment fait pour optimiser au maximum le coût de fabrication. Il comporte notamment quelques astuces sympathiques.

### Alimentation

{{< img src="airelec-indigo-power-supply.png" >}}

La partie alimentation est faite pour être économique. Il s'agit d'un système de redressement simple alternance avec des diodes Zener pour permettre la régulation à 24V (alimentation relais) et à 5V (microcontrôleur).

Les composants **C1** et **R1** permettent de limiter le courant dans la diode Zener **ZD1**.
**C1** se comporte comme une résistance fixe à 50 Hz. Sa valeur de 1µF correspond à 50Hz à une résistance de 3,2kOhm.  
{{< math >}}Z_{C_1}=\frac{1}{2 \times \pi \times f \times C_1}=\frac{1}{2 \times 3.14 \times 50 \times 1.10^{-6}} = 3185 \Omega{{< /math >}}
**R28** et **R29** permettent de décharger **C1** lorsque l'alimentation est déconnectée. Cela évite de s'électrocuter si le condensateur **C1** reste chargé.
**ZD1** est une diode Zener, elle coupe les alternances négatives et les alternances positives à 27V

**D1** permet d'éviter la fuite de courant et donc de conserver la charge du condensateur de lissage **C2**

Aux bornes de **C2**, on obtient une tension proche de 24V continu.

L'alimentation 5V est quant à elle générée par la diode Zener **ZD2** dont le courant est limité par les résistances **R30** et **R3**. Le condensateur de lissage **C3** permet d'assurer la stabilité de l'alimentation 5V.

### Mesure de la température et de sa consigne

C'est certainement ici que le schéma est le plus astucieux. En effet, le microcontrôleur Microchip PIC16F628A utilisé ne dispose pas de convertisseur analogique numérique (ADC).

{{< imghover
"large"
"mesure-temperature.png"
"mesure-potentiometre.png"
"decharge-condensateur.png" >}}

La position du potentiomètre qui sert à régler la température ainsi que la température provenant du capteur vont donc être mesurées en utilisant le seuil de basculement de l'entrée **RB4** de **IC2**.

Le capteur de température type CTN est relié aux contacts **S7** et **S6**. Il s'agit d'une résistance dont la valeur varie en fonction de la température.

Pour démarrer la mesure de la température, le firmware du microcontrôleur place les broches **RB6** et **RB7** en haute impédance. La partie potentiomètre est alors isolée.
La broche **RB5** est placée à l'état haut (5V), la broche **RB3** est placée à l'état bas (Masse).
Le microcontrôleur mesure alors le temps qui s'écoule jusqu'à ce que la broche **RB4** passe de l'état bas à l'état haut.
C'est cette durée qui permet de déterminer la température.

Pour démarrer la mesure de la position du potentiomètre. Le firmware du microcontrôleur place **RB3** et **RB5** en haute impédance pour isoler le capteur de température. **RB6** est placée à l'état haut, **RB7** est placée à l'état bas.
Le microcontrôleur mesure alors le temps qui s'écoule jusqu'à ce que la broche **RB4** passe de l'état bas à l'état haut.
C'est cette durée qui permet de déterminer la position du potentiomètre.

Entre deux mesures, les broches **RB3**, **RB4**, **RB5**, **RB6**, **RB7** sont placées à l'état bas pour décharger les condensateurs **C5**, **C6** et **C7**.

Le cycle suivant se répète alors : décharge des condensateurs, mesure du potentiomètre, décharge des condensateurs, mesure de la température

Voici un petit tableau récapitulatif :

| État                 | RB3  | RB4  | RB5  | RB6  | RB7  |
| -------------------- | :--: | :--: | :--: | :--: | :--: |
| Mesure potentiomètre | Hi-Z | Hi-Z | Hi-Z |  1   |  0   |
| Mesure température   |  0   | Hi-Z |  1   | Hi-Z | Hi-Z |
| Décharge             |  0   |  0   |  0   |  0   |  0   |

_Hi-Z = Haute impédance ou entrée_  
_0 = Etat bas 0V_  
_1 = Etat haut 5V_

### Détection du fil pilote

{{< img preset="med" src="fil-pilote.png" >}}

Le fil pilote est un fil qui permet de donner des ordres au chauffage à partir d'une centrale. Il comporte six ordres différents (confort, confort -1°C, confort -2°C, éco, hors gel, arrêt) suivant le signal envoyé sur le fil. Il s'agit du signal secteur qui est modulé. Pour pouvoir décoder les ordres, il faut donc simplement détecter si la tension sur le fil pilote est positive, nulle, ou négative. Le signal secteur étant à une fréquence de 50 Hz, la fréquence du microcontrôleur étant elle de plusieurs MHz, il suffit d'échantillonner la valeur du fil pilote à intervalle régulier.

{{< img src="ordres-fil-pilote.jpg" >}}

Ici, le montage est plutôt simple. La diode double **D4** permet de protéger le microcontrôleur en évitant que la tension sur les IO dépasse le rail d'alimentation 5V ou ne devienne négative.

Lorsque la tension du fil pilote est positive, **D4** écrête la tension à 5V, **RB1** et **RB2** sont à l'état haut

Lorsque la tension du fil pilote est nulle, sur **RB1** nous avons 0V soit l'état 0. Sur **RB2** nous avons un pont diviseur de tension de rapport 0,5 formé par **R14** et **R15**. Il y a donc 2.5V sur **RB2**, la datasheet du microcontrôleur nous donne un seuil haut de 2.0V, **RB2** est donc à l'état haut.

Lorsque la tension sur le fil pilote est négative, la tension de la broche **RB1** passe sous le seuil bas, **RB1** et **RB2** sont donc à l'état bas.

| Tension fil pilote | RB1 | RB2 |
| ------------------ | :-: | :-: |
| Positive           |  1  |  1  |
| Nulle              |  1  |  0  |
| Négative           |  0  |  0  |

### Commande de la résistance de chauffage

{{< img src="commande-resistance-chauffante.png" >}}

Il s'agit d'un montage classique à relais. Lorsque la broche **RA6** passe à l'état 1, le transistor **Q3** conduit, ce qui active la bobine du relais **RL2** et ferme son contact.
La diode **D5** est une diode de roue libre. Elle sert à absorber la surtension créée par la bobine du relais **RL2** lorsque **Q3** ne conduit plus.

### Commande de la résistance de chauffage avec ventilateur

{{< img preset="med" src="commande-resistance-soufflerie.png" >}}

Il s'agit exactement du même montage que pour la commande de la résistance de chauffage, avec l'ajout d'un triac supplémentaire **Q2**.
Cette fois, il faut également commander le moteur de soufflerie qui est une charge inductive. Si l'on utilise un relais simple, il y aura des arcs à la commutation et à l'ouverture, ce qui va endommager rapidement le contact du relais.
De l'autre côté le Triac va supporter les pics d'intensités lors des commutations, mais sa résistance statique est moins bonne que celle d'un contact mécanique ce qui va le faire chauffer en cas d'utilisation continue.

On utilise alors une sorte de commutation hybride pour avoir le meilleur des deux mondes. Le Triac est commuté en premier pour absorber le pic d'intensité, le contact mécanique du relais est ensuite commuté pour prendre la suite et soulager le Triac.
À l'inverse lorsque l'on arrête la soufflerie, on ouvre le relais **RL1** en premier et ensuite on ouvre **Q2**.

## Diagnostic et réparation

La panne sur le sèche serviette se produit lorsque la soufflerie s'active. Après quelques secondes, le sèche-serviettes se coupe et redémarre.
Ce type de panne fait clairement penser à un souci d'alimentation. Mon premier réflexe a donc été de vérifier la santé des condensateurs chimiques.
Pour cela il faut utiliser un appareil qui permet de mesurer la valeur des condensateurs, mais aussi leur résistance série. Il arrive souvent que la valeur des condensateurs soit correcte, mais que la résistance série soit trop élevée. Cela perturbe leur aptitude à absorber et à délivrer de forts courants (la résistance série limitant trop fortement le courant de sortie du condensateur).

{{< img src="component-tester.jpg" >}}

J'utilise pour ma part un testeur de composants à base d'ATMega328 qui se trouve facilement sur [eBay](https://www.ebay.fr/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313&_nkw=atmega328+component+tester&_sacat=0) pour une petite dizaine d'euros. C'est pratique, ça permet de tester rapidement les résistances, transistors et condensateurs.

Le test des deux condensateurs chimiques **C2** et **C3** ne donne rien. Ils sont en parfait état.

{{< img src="capacitor-measure.jpg" >}}

Je décide à présent de mesurer le condensateur d'entrée d'alimentation **C1**. Il s'agit d'un condensateur de 1uF polypropylène de classe X2. Lors de la mesure, c'est le drame... Sa valeur est de 461,7 nF.
J'ai enfin trouvé la panne, alors que sous 50Hz son impédance devrait être de {{< math "3185 \Omega" />}}, elle est en fait de {{< math "6893 \Omega" />}}, soit plus du double !
Cela limite fortement le courant que peut fournir l'alimentation. La commutation de la bobine de relais **RL1** entraine donc un écroulement de l'alimentation qui entraine un redémarrage du microcontrôleur en boucle.

Mon ami eBay m'a permis de trouver un nouveau condensateur de remplacement pour 3 euros livré. Après remplacement tout refonctionne à nouveau :heart_eyes: .

:warning: **Attention, lors du remplacement de condensateurs qui sont connectés au secteur, il faut veiller à choisir des références de classe X2 pour éviter tout risque** :warning:

## Conclusion

Même si finalement la panne a été facilement réparée, j'ai pris beaucoup de plaisir à comprendre le fonctionnement de cet appareil. Je le trouve globalement bien construit, c'est dommage qu'un simple condensateur l'ait mis en panne. Mon père possédant un second modèle identique, j'espère que ce problème est uniquement un coup de "pas de chance".
La réparation de l'électroménager est pour moi une bonne école de l'électronique. En général, les cartes sont simples et l'ont trouve plein de schémas sur internet. Par contre, cela touche généralement au 220V... donc prudence !
J'espère que mes explications ont été claires ! À bientôt !

## Documents utiles

- {{< file src="microchip-pic16f628a.pdf" >}}
- {{< file src="st-t435-triac.pdf" >}}
- {{< file src="optotriac-moc3023md.pdf" >}}
- {{< file src="omron-relay-g5ca.pdf" >}}
