.. role:: raw-html(raw)
   :format: html

.. role:: underline
    :class: underline

.. role:: strike
    :class: strike

***********************
Proprietà di Archimede
***********************
Definizione
===========
| Sia @alpha, beta in RR^+@, @beta / alpha@ è ancora positivo, @beta/alpha = +m_0,m_1m_2m_3...@
| Prendendo @n >= m_0+2@ si ha

.. centered:: @n > beta/alpha hArr alpha n > beta@

Dati due numeri reali positivi @alpha@ e @beta@ esiste un numero naturale @n@ tale che @alpha \* n > beta@

| **Dimostrazione (per assurdo):**

Per assurdo, diciamo che @nx <= y, AA n in NN@. Dunque @n <= y/x rArr NN@ superiormente limitato, cosa che è falsa.

.. note:: @RR@ è archimedeo, cioè @AA x > 0, y in RR, EE n in NN : nx > y@

*******************************************
Teorema di densità di Q e di R\\Q nei Reali
*******************************************
@AA x,y in RR@ con @x < y@ esistono @q in QQ, s in RR\\\\QQ@ tale che @x < q < y and x < s < y@

.. centered:: *Oppure*

Siano @x, y in RR@ e sia @x < y@, allora @EE q in QQ and EE s in RR\\\\QQ : x < q < y and x < s < y@

Dimostrazione dei 3 casi di Densità
====================================
| Dalle ipotesi del Teorema abbiamo che x < y da cui si evince facilmente che @y-x>0@.
| Applichiamo la proprietà di Archimede che dice @EE n_0 in NN : n_0(y-x) > 1 hArr y-x > 1 / (n_0)@.
| Preso il numero @n_0 x@, consideriamo l'insieme @H = { h in ZZ, h <= n_0 x} rArr@
| @rArr EE m_0 in H : m_0 <= n_0 x < m_0 + 1@

.. centered:: @x < (m_0 +1)/n_0 = m_0 / n_0 + 1 / n_0 <= x + 1 / n_0 < x + (y-x) = y@

.. note:: @x + 1 / n_0@ è minore ( *in senso stretto* ) di @y@

1. Caso: **@x@ Razionale, @y@ non Razionale**

    - Sia @x in QQ, y in RR\\\\QQ@ [ oppure @x in RR\\\\QQ, y in QQ@ ]
    - @x < (x+y) / 2 < y@ ( *prendiamo il punto di mezzo* )
    - @(x+y) / 2 in RR\\\\QQ@ ed è il punto di mezzo.

2. Caso: **Entrambi non razionali**

     - Sia @x,y in RR\\\\QQ@
     - @x < (x+y) / 2 < y@ ( *prendiamo il punto di mezzo* )
     - @(x+y) / 2@ può appartenere a @RR\\\\QQ@ oppure @QQ@
     - Nel caso @RR\\\\QQ@ abbiamo finito: se @(x+y)/2 in RR\\\\QQ@ si ha la tesi.
     - Nel caso @QQ@, ovvero @(x+y)/2 in QQ@, la tesi segue dal caso precedente.

3. Caso: **Entrami Razionali**

     - Sia @x,y in QQ@
     - Consideriamo @z in RR\\\\QQ, z > 0@ ( *z non razionale positivo* )
     - Sia @y-x > 0, z > 0@
     - Per la proprietà di archimede esisterà un multiplo @n in NN@ tale che @n \* (y-x) > z@
     - Quindi @(y-x) > z / n@
     - @x < x + z / n@ è un'ugaglianza sempre vera @rArr@
     - @x < x + z / n < x (y-x) = y@
     - @z / n in RR\\\\QQ@

.. note:: differenza tra densità e continuità: La continuità mi dice che non ci sono dei buchi(vuoti) tra due numeri. La densità ha un'informazione in più.

*************************************
Maggioranti e Minoranti di un Insieme
*************************************

Definizione di Maggiorante
===========================

Sia @X sube RR@ un insieme ordinato non vuoto. Sia @k in RR@ tale che:

.. centered:: @k >= x AA x in X@

.. note:: @k@ non deve appartenere per forza ad @X@

@k@ viene chiamato **maggiorante** di/per @X@. In questo caso @X@ viene detto **superiormente limitato**.

.. note:: Un qualunque insieme numerico o non ha maggioranti (non è superiormente limitato) oppure ne ha infiniti.

| **Esempio 1: Trovare i maggioranti di @X = { n / (n+1): n in NN}@**

Sia @X = { n / (n+1): n in NN}@. Questo insieme è sicuramente superiormente limitato poichè @n / (n+1) < 1@ è sempre vera, per tale motivo @1@ è maggiorante così come tutti i numeri maggiori di @1@.

| **Dimostrazione che i Maggioranti sono @1@ e i numeri maggiori di @1@**
| Vediamo se esistono dei numeri @k in RR@ tali che

.. centered:: @n / (n+1) <= k AA n in NN@

- @n <= k(n+1) AA n in NN@ ( *molt. per k*)
- @n <= kn+k AA n in NN@ ( *portiamo al secondo membro* )
- @n(1-k) <= k AA n in NN@ ( *dividiamo per k*)
- Se @k < 1@ si ha @n <= k / (1-k) AA n in NN@

La condizione @n <= k / (1-k) AA n in NN@ non può essere vera perchè contraddice il fatto che @NN@ non è superiormente limitato, quindi abbiamo dimostrato che i maggioranti sono 1 e i numeri più grandi di 1.


Definizione di Minorante
===========================

Sia @X sube RR@ un insieme ordinato non vuoto. Sia @k in RR@ tale che:

.. centered:: @k <= x AA x in X@

.. note:: @k@ non deve appartenere per forza ad @X@

@k@ viene chiamato **minorante** di/per @X@. In questo caso @X@ viene detto **inferiormente limitato**.

.. note:: Un qualunque insieme numerico o non ha minoranti (non è inferiormente limitato) oppure ne ha infiniti.

| **Esempio 2: Trovare i minoranti di @X = { n / (n+1): n in NN}@**

Sia @X = { n / (n+1): n in NN}, k in RR@.

- @k <= n / (n+1) AA n in NN@
- @(n+1)k <= n AA n in NN@
- @kn+k <= n AA n in NN@
- @k <= n-kn AA n in NN@

@k <= (1-k)n AA n in NN, k < 1@ perchè @k >= 1@ sono maggioranti, mentre @k@ è un minorante. @k / (1-k) <= n AA n in NN@. @k / (1-k) <= 1 hArr k <= 1-k hArr 2k <= 1 hArr k<=1/2@

Tutti i @k <= 1/2@ saranno minoranti.

| **Esempio 3: Trovare i maggioranti di @X = { x / (x^2+30): x in RR}@**

- @x = 1 rarr 1/31@
- @x = -sqrt(2) rarr -sqrt(2)/32@
- @k >= x / (x^2 + 30) AA x in RR rArr@ ( *segue che @k>0@* )
- @k(x^2+30) >= x AA x in RR rArr@
- @k x^2 -x + 30k >= 0 AA x in R@

.. note:: @k@ è positivo e il segno della disequazione è positiva quindi per esserci soluzione deve accadere che @Delta <= 0@

- @Delta = 1 - 4k (30k) = 1 - 120k^2 > 0 rArr@ ( *cambiamo di segno* )
- @rArr 120k^2 - 1 > 0@
- Il @Delta@ di @120k^2@ (@Delta_k@) è uguale a @4 \* 120 > @  ( *???* )

@k <= 1 / sqrt(120)@ oppure @k >= 1 / sqrt(120)@ ma visto che @k > 0@ segue che @k >= 1 / sqrt(120)@ sono i maggioranti di @X@.

**Esercizi:**

- Trovare i minoranti dell'esempio 3
- Trovare i maggioranti e i minoranti dell'insieme @X = { (x+2)/(2x-4): x < 2}@

    + Soluzione: @k >= 1/2@ sono maggioranti. Non ci sono minoranti.

.. note:: Per gli informatici: il maggiorante in inglese è Upper bound, il minorante è Lower Bound

.. note:: Un maggiorante/minorante di un insieme è un elemento che è maggiore/minore o uguale di tutti gli elementi dell'insieme.


******************************
Massimo e Minimo di un Insieme
******************************

Definizione di Massimo/Minimo di un insieme
============================================

Se @X@ è superiormente/inferiormente limitato ed esiste un maggiorante/minorante di @X@ che si trova in @X@ viene detto **massimo/minimo** di @X@

Se @bar(x)@ è massimo/minimo per @X { (bar(x) >= x AA x in X), (bar(x) in X) :} hArr@ il massimo/minimo di @X@ è il più grande/piccolo elemento di @X@

.. note:: Se il massimo/minimo esiste allora è unico

.. note:: Il massimo/minimo di un insieme ordinato è il massimo/minimo numero presente all'interno dell'insieme.


*******************************************
Estremo Superiore e Inferiore di un Insieme
*******************************************

Definizione #1
==============

Se @X@ è superiormente/inferiormente limitato si chiama **estremo superiore/inferiore** il più piccolo(cioè minimo)/grande(cioè massimo) dei maggioranti/minoranti.

Definizione #2
==============
L'estremo superiore/inferiore è il il più piccolo/grande elemento che appartiene all'insieme dei maggioranti/minoranti ed è unico

.. note:: Un insieme avrà sempre un estremo superiore/inferiore quindi l'insieme dei maggioranti/minoranti di un insieme non sarà mai vuoto.

Teorema
=======

Se @X@ è superiormente/inferiormente limitato, esiste sempre il **minimo/massimo** dei maggioranti/minoranti

.. note:: Questo teorema è vero solo se @X sube RR@, se @X sube QQ@ allora è falso.

.. warning:: La ragione principale che ha portato all'introduzione dei Reali è che essi costituiscono uno spazio "senza buchi". Più precisamente, i reali sono uno spazio metrico completo. La completezza può essere espressa in vari modi, tutti equivalenti all'assioma di Dedekind. l'insieme @QQ@ non può essere definito completo.