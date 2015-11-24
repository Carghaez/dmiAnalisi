.. role:: underline
    :class: underline

.. role:: strike
    :class: strike

.. role:: toright
    :class: toright

##############
I Numeri Reali
##############

********************************
Introduzione all'insieme @RR@
********************************
Sia @m/n in QQ@, @m/n@ può essere rappresentato nella forma

.. centered:: @+-q_0,q_1q_2q_3q_4@... [ *infinite cifre dopo la virgola* ]

definita :underline:`allineamento decimale` dove @q_0 in NN_0@ mentre @q_1,q_2,q_3@ sono cifre = {0, 1, ..., 9}.

.. sidebar:: Giovanni Emmanuele - Orari di ricevimento
    :subtitle: Stanza 346 (Altro blocco)

    - Lunedì 8:00 - 9:30
    - Martedì 10:30 - 12:00
    - Venerdì 8:00 - 9:30

Definizione di Numero Reale *#1*
================================
Ad ogni numero razionale si può associare un unico allineamento decimale che è finito oppure periodico.

Definizione di Numero Reale *#2*
================================
chiameremo :underline:`numero reale` lo @0 in Q@ ed inoltre ogni simbolo del tipo @+-c_0,c_1c_2c_3c_4@... dove @c_0 in NN_0@ mentre @c_1, c_2, c_3@ sono cifre che non sono tutte nulle (cioè @0@).

Definizione di @RR@
===================
è l'insieme dei numeri Reali positivi se hanno il segno @+@, negativi se hanno il segno @-@, lo @0@ non è positivo nè negativo.

:Lezione del: 13-10-2015

**************************************************
Uguaglianza in @RR@
**************************************************

| **Definizione:**

Siano @x, y in RR@, diremo che essi sono uguali se @x@ e @y@ sono lo zero di @QQ@ oppure, se nessuno dei due è lo zero, se hanno lo stesso segno, la stessa parte intera e le cifre decimali ordinatamente uguali con l'eccezione dei numeri periodici di periodo 9.

Proprietà della relazione Uguaglianza
=====================================
- *Riflessiva* : @x = x AA x in RR@
- *Simmetrica* :  @x = y rArr y = x@
- *Transitiva* : @x = y and y = z rArr x = z@

:Lezione del: 13-10-2015

**********************
Ordinamento in @RR@
**********************
Definizione di Ordinamento in @RR@
==================================

Siano @x, y in RR@ con @x != y@

* Se @x@ ha il segno @+@ e @y = 0@; diciamo che @x@ è più grande di @y@ [@x > y@]
* Se @x@ ha il segno @-@ e @y = 0@; diciamo che @y@ è più grande di @x@ [@y > x@]
* Se @x@ ha segno @+@ e @y@ ha segno @-@; diciamo che @x@ è più grande di @y@ [@x > y@]
* Se @x@, @y@ hanno il segno @+@; diciamo che @x@ è più grande di @y@ se la parte intera di @x@ è più grande di quella di @y@. Se invece le parti intere sono uguali confrontiamo, in maniera ordinata, le cifre decimali dopo la virgola fin quando non troviamo una cifra di @x@ che è più grande di @y@
* Se @x@, @y@ hanno il segno @-@; Indico @-x@ e @-y@ i numeri che si ottengono da @x@, @y@ cambiando il segno; diciamo che @x@ è più grande di @y@ se @-x < -y@ [ *Quando due numeri hanno il segno @-@ cambiamo di segno i due numeri e ci riconduciamo alla definizione precedente* ]

.. note:: Se le parti intere sono uguali confrontiamo la prima cifra decimale e così via...

Proprietà dell'Ordinamento in @RR@
==================================
- *Antisimmetrica* : @x <= y and y <= x@ @rArr@ @x = y@
- *Transitiva* : @x <= y and y <= z@ @rArr@ @x <= z@

Definizione di Ordinamento Totale
=================================
L'Ordinamento in @RR@ è **totale** perchè due elementi in @RR@ sono confrontabili, qualunque essi siano.
L'Ordinamento Totale è un particolare Ordinamento Parziale [ *si definisce ordinamento parziale quando almeno due elementi non sono confrontabili* ].

.. seealso:: *Approfondire Ordine Lessicografico*

.. sidebar:: 1° Perla di Emmanuele

    Il simbolismo in campo scientifico è fondamentale. Non possiamo parlare a vanvera anzichè indicare una cosa ne indichiamo un'altra. Se io prendo un testo in inglese o indiano, visto che i simboli sono uguali in tutte le lingue lo puoi leggere. Se i simboli fossero diversi da paese a pese sarebbe un guaio. Il simbolismo uguale in tutti i paesi è fondamentale per la comunicazione.
    Il succo: Dobbiamo stare attenti ad usare i simboli appropriati quando si esprime un concetto.

:Lezione del: 13-10-2015

******************************************
Valore Assoluto @\|x\|@
******************************************

| **Definizione:**

Dato un numero reale @x@, si chiama :underline:`valore assoluto` di @x@ un altro numero reale definito come segue

- @\|x\| = 0 if x = 0@
- @\|x\| = x if x text( è positivo)@
- @\|x\| = -x if x text( è negativo)@

**Es.** @if \|x - 1\| = {(0 text( per ) x = 1),(x-1 text( per ) x > 1),(-(x-1) text( per ) x < 1):}@

.. note:: nell'esempio stiamo esaminando/studiando il segno di tutta la quantità che abbiamo dentro il valore assoluto

Proprietà del Valore Assoluto
=============================
- @\|x\| = 0 hArr x = 0@
    | *Dimostrazione* :
    | **Ip.** @\|x\| = 0@; **Ts.** @x = 0@.
    | Procediamo per assurdo supponendo che @x != 0@, quindi @x@ è positivo oppure @x@ è negativo.
    | Se @x@ è positivo allora @\|x\| = x  rArr x > 0 rArr@ contraddizione dell'ipotesi.
    | Se @x@ è negativo allora @\|x\| = -x rArr -x > 0 rArr@ contraddizione dell'ipotesi.
    | Quindi @x = 0@.
- @\|x\| >= 0 AA x in RR@ ( *non è mai negativo* )
- @\|x\| = \|-x\| AA x in RR@
    | *Dimostrazione* :
    | @x@ positivo @rArr \|x\| = x = +c_0,c_1c_2c_3@... [ *Allineamento decimale con segno @+@* ] quindi @-x = -c_0,c_1c_2c_3@... è negativo.
    | @\|-x\| = -(-x) = +c_0,c_1c_2c_3@... quindi in tutte i due casi vale @+c_0,c_1c_2c_3@...
    | @x@ è negativo @rArr -x@ è positivo @rArr \|-x\| = -x @ (Proprietà transitiva)

:Lezione del: 13-10-2015

****************************
Somma in @RR@
****************************

Somma tra positivi
==================
Sia @x = c_0,c_1c_2c_3... and y = d_0,d_1d_2d_3...@

.. centered:: @x+y = +h_0,h_1h_2h_3...@

Indichiamo con

- @x_0 = +c_0 , y_0 = +d_0 rArr x_0 + y_0 = s_0@
- @x_1 = +c_0,c_1 , y_0 = +d_0,d_1 rArr x_1 + y_1 = s_1@
- continuando così...

Definiremo @s_0@ ed @s_1@ somme parziali.

:Lezione del: 13-10-2015


Somma tra positivo e negativo
======================================
Si considerano i valori assoluti dei numeri e si prende il segno di quello maggiore ( *come valore* ) e si fa la differenza dei due numeri mettendo il maggiore come primo numero.

*Appunti incompleti...*

Teorema delle Somme Parziali
============================
Eseguendo le somme parziali da un certo posto in poi la parte intera rimane la stessa; da un posto successivo anche la prima cifra decimale rimane la stessa e così via...

@a in RR^+, b in RR^-@ : @a+b = {(+(\|a\| - \|b\|), if \|a\| > \|b\|),(0, if \|a\| = \|b\|),(-(\|b\| - \|a\|), if \|a\| < \|b\|):}@

:Lezione del: 13-10-2015

**************************
Prodotto in @RR@
**************************

| Sia @a, b in RR^+@ con @a=+h_0,h_1h_2h_3@... e @b = + m_0,m_1m_2m_3@...
| **Teorema**
| Da un certo posto in poi, i numeri @p_0,p_1@... hanno la stessa parte intera, da un posto successivo anche la prima fila decimale rimane costante
| @a in R^+@, @b in R^-@ : @a \* b = - \|a\| \* \|b\|@


*Appunti incompleti...*

:Lezione del: 20-10-2015


**********************************************
Proprietà della Somma e del Prodotto in @RR@
**********************************************

.. warning:: Tutte queste proprietà ci servono per poter eseguire i calcoli e devono essere tutte dimostrate/dimostrabili

- *Commutativa* : @a + b = b + a, a\*b = b\*a@
- *Associativa* : @(a+b)+c = a+(b+c), (a\*b)\*c = a\*(b\*c)@
- *Elemento neutro della somma è @0@* : @a+0 = 0+a = a@
- *Elemento neutro del prodotto è @1@* : @a\*1 = 1\*a = a@
- *Ogni @a in RR@ ha l'opposto (si indica con @-a@)*
- *Ogni @a in RR, a != 0@ ha l'inverso (si indica con @1/a@)*
- *Proprietà distributiva ( del prodotto rispetto alla somma ):*

    | @(a+b) \* c = a \* c + b \* c@

- *legge dell'annullamento del prodotto ( per risolvere le equazioni ):*

    | Se @a\*b = 0@, allora almeno uno dei due fattori dev'essere @0@.
    | **Es.** @(x+1)(x-2) = 0@ allora @x+1 = 0@ oppure @x-2 = 0@, quindi @x=-1 or x=2@

- *Regola dei segni ( Per risolvere le disequazioni ):*

    | @+ \* + = +@
    | @+ \* - = -@
    | @- \* - = +@

.. note:: L'elemento neutro, l'opposto e l'inverso sono unici

.. note:: *Prima regola che bisogna imparare nello studio del calcolo scientifico:* Nella teoria devo trovare qualcosa che giustifica la mia operazione, altrimenti non la posso fare

:Lezione del: 20-10-2015

**************************
Potenza in @RR@
**************************
Sia @a^n = a\*a\*a\*a@ ... (n fattori) con @n in NN@

Proprietà della potenza
=======================
- @a^(n_1) \* a^(n_2) = a^(n_1+n_2)@
- @a^(n_1) / a^(n_2) = a^(n_1-n_2)@
- @(a^n)^p = a^(n\*p)@
- @a^0 = 1 AA a in RR, a != 0@ ( @0^0@ non ha alcun significato)
- @a^-n = a/a^n@ (inverso di @a^n@) con @n in NN@

| Sia @x^n = a@ dove @n in NN, a in RR@
| **Caso** @a = 0@ [ *è il caso più semplice* ]
| L'equazione diventa @x^n = 0 rArr x=0@
| Dalla legge dell'annullamento del prodotto segue che @x=0@ è l'unica soluzione.

.. note:: Applicando la legge dell'annullamento del prodotto uno dei fattori dev'essere @0@, ma essendo tutti i fattori uguali la soluzione non può essere che @x = 0@

| **Caso** @a > 0@ [ *Cerchiamo soluzioni positive* ]
| L'equazione @x^n = a if a > 0@ ammette una ed una sola soluzione **positiva**, questa soluzione viene chiamata *radice aritmetica n-esima(ennesima) di a*.
| Definizione del **TEOREMA** della *"radice n-esima aritmetica di a"*, simbolo @root(n)(a)@

.. centered:: Sia @a > 0@ e sia @n in NN@. L'equazione @x^n = a@ ha un'unica soluzione **positiva**.

| [ *Di questo teorema* **NO DIMOSTRAZIONE** ]
| **Caso** @a > 0@ [ *Cerchiamo soluzioni negative* ]
| Se @n@ è dispari, l'equazione che stiamo considerando non ha soluzioni negative.
| Se @n@ è pari, il numero @- root(n)(a)@ è soluzione dell'equazione @x^n = a@ ed è **unica**.

.. note:: se fossero più di una, gli opposti delle soluzioni trovate sarebbero positive e questo andrebbe contro il teorema enunciato nel caso precedente

| **Caso** @a < 0@
| Tutto dipende da @n@; se è pari allora *non esistono* soluzioni.
| Se @n@ è dispari, se **esistono** soluzioni saranno sicuramente numeri negativi [ *applicando la regola dei segni* ]. Supponiamo che @bar(x)@ (negativo) sia una soluzione:
| @bar(x)^n = a hArr - (bar(x)^n) = -a hArr (-bar(x))^n = -a text( dove ) -a > 0, - bar(x) > 0@
| Dal teorema precedente segue che @-bar(x)@ è unico ed è @-bar(x)@ = @root(n)(a) rArr bar(x) = - root(n)(a)@.

.. note:: Quando @n@ è *dispari*, per comodità di scrittura @- root(n)(-a)@, adottiamo la scrittura @root(n)(a)@ portando all'interno della radice il segno @-@

:Lezione del: 20-10-2015

***********************************
Radice Quadrata in @RR@
***********************************
| **Simbolismi e proprietà**
| @root(n)(a) = a^(1/n)@ quindi @a^(m/n) = root(n)(a^m) if a >= 0 or ( a < 0 and n, m  text( pari)) or (a < 0 and n text( dispari))@.

.. note:: Se @a < 0@, @n@ pari e @m@ dispari allora @a^(m/n)@ non ha significato.

| Sia @a^q, q in RR@ con @q = m_0,m_1m_2@... [ *infinite cifre* ]
| Possiamo definire @a^(m_0,m_1...) = a^((m_0,m_1...) / 10)@  solo se @a >= 0@ poichè non sappiamo se @m_0,m_1@... possa essere pari come la base.

:Lezione del: 20-10-2015

**********************************
Logaritmo in @RR@
**********************************
| Sia @a^x = b@ @larr def rarr@ equazione esponenziale
| Consideriamo @a, b, x in RR@, cerchiamo di risolvere l'equazione esponenziale @a^x = b@ nell'insieme dei numeri Reali.
| @a@ dev'essere maggiore di @0@ poiché non sappiamo se @x@ è negativo @rArr@ da ciò segue che anche @b@ dev'essere positivo.
| Inoltre supponiamo @a != 1@ [ *poiché se @a@ fosse @1@ avremmo infinite soluzioni per @x@* ].
| **Teorema**
| Se @a, b > 0@ ed @a != 1@, l'equazione esponenziale @a^x = b@ ha soluzione :underline:`unica`.
| Questa soluzione viene definita *"logaritmo in base a di b"*, simbolo @log_a b = x@
| **Es. 1** @x = log_2 8 hArr 2 ^ (log_2 8) = 8 rArr@ quindi @log_2 8 = 3@
| **Es. 2** @x = log_4 5 hArr 4 ^ (log_4 5) = 5 rArr 4 ^ x = 5@


| **Dimostrazione**
| Sia @log_4 5 in RR@\\@QQ@
| Per assurdo:
| esiste @p/q@ con @p, q in ZZ, q != 0@ tale che @log_4 5 = p/q hArr@
| @4 ^ ( p/q) = 5@ [ *esattamente la definizione di logaritmo* ] @hArr@
| @(4 ^ ( p/q) ) ^ q = 5 ^ q hArr 4 ^ q@ [pari] @= 5 ^q@ [dispari] @ rArr @ASSURDO.

:Lezione del: 22-10-2015

Proprietà usate per risolvere equazioni e disequazioni logaritmiche
====================================================================

.. note:: Se l'argomento dell'algoritmo è @1@, qualunque sia la base il risultato è @0@

1. @log_a 1 = 0 AA a > 0, a != 1@ [ *questo perchè per definizione @a ^ 0 = 1@* ]

    | Generalizzando abbiamo che @log_a b = 0 hArr b = 1 AA a > 0, a != 1@

2. @a ^(log_a b) = b if log_a b > 0 hArr a, b > 1 or 0 < a, b < 1@
3. @log_a b < 0 hArr 0 < b < 1 < a or 0 < a < 1 < b@
4. Se @a > 1, b_1 < b_2 rArr log_a b_1 < log_a b_2@ [ *dalla proprietà delle potenze* ]
5. Se @0 < a < 1, b_1 < b_2 rArr log_a b_1 > log_a b_2@
6. @log_a b_1 + log_a b_2 = log_a (b_1 \* b_2)@

    | *Dimostrazione:*
    | @x_1 = log_a b_1 and x_2 = log_a b_2@
    | @a ^(x_1) = b_1 and a ^ (x_2) = b_2@
    | @a ^ (x_1 + x_2) = b_1\*b_2 rArr x_1 + x_2 = log_a (b_1 \* b2)@
    | Segue @log_a b1 + log_a b2 = log_a (b1 \* b2)@

7. @log_a b_1 - log_a b_2 = log_a (b_1 / b_2)@ con @a, b, c > 0 , a != 1, c != 1@
8. @log_a (b ^ c) = c \* log_a b@

    | *Dimostrazione:*
    | @x = log_a b rArr a ^ x = b rArr (a ^ x) ^ c = b ^ c rArr a ^ (c \* x) = b ^ c@

9. @log_a b = log_c b/ log_c a@ [ *Cambiamento di base* ]

    | *Dimostrazione [ usando la def di logaritmo ]:*
    | @x = log_a b rArr a ^ x = b rArr log_c (a ^ x) = log_c b rArr@
    | @x \* log_c a = log_c b rArr x = log_c b / log_c a@


Esercizi sui logaritmi
======================

1. @log_2 (x^2 + 2x) - log_(1/2) (1/4) = 1@

     - @x^2 + 2x > 0@
     - @log_(1/2) (1/4) = ( log_2 (1/4) = -2 ) / ( log_2 (1/2) = -1 ) = 2@ P(9)

     1) @log_2 (x^2 + 2x) - 2 = 1 rArr log_2 (x^2 + 2x) = 3 rArr@
     2) @2^(log_2 (x^2 + 2x)) = 2^3 rArr@ P(2)
     3) @x^2 + 2x = 2^3 rArr@
     4) @x^2 + 2x - 8 = 0@

     - @Delta = 4 + 32 = 36@
     - @x = (-2 + (+- 6)) / 2 = 2 or -4@
     - Quindi @x = 2 or -4@

2. @sqrt(1 + log_(sqrt(2)) x) >= 3 hArr@ #c1

    - @x > 0@

    1) @1 + log_(sqrt(2)) x >= 0 hArr@
    2) @log_(sqrt(2)) x >= -1 = log_(sqrt(2)) sqrt(2)^-1 hArr@ ????
    3) @x >= sqrt(2)^-1 hArr@
    4) @x >= 1 / sqrt(2)@

    1) **#c1** @hArr 1 + log_(sqrt(2)) x >= 9 hArr@
    2) @log_(sqrt(2)) x >= 8 = log_(sqrt(2)) sqrt(2) ^ 8 hArr@
    3) @x >= sqrt(2) ^ 8 = (sqrt(2)^2)^4 = 16 rArr@
    4) @x >= 16@

3. @{ (| log_2 x + 3 | = 5 ),( x > 0 ) :} rArr@ #S1, #S2

     1) **#S1** = @{ (log_2 x + 3 >= 0 ), ( log_2 x + 3 = 5), (x > 0) :} rArr@
     2) @{ (log_2 x >= log_2 (2^-3)), (log_2 x = log_2 (2^2) ), ( x > 0) :} rArr@
     3) @{ (z >= 2 ^ -3 = 1/8 ), (x = x^2 = 4), (x > 0) :} rArr@
     4) @x = 4@

     1) **#S2** = @{ (log_2 x + 3 < 0 ), (-(log_2 x + 3) = 5), (x > 0) :} rArr@
     2) @{ (log_2 x < -3 ), (-log_2 x = 8 ),  (x > 0 ) :} rArr@
     3) @{ (x < 1/8 ) , (log_2 x = -8) , ( x > 0 ) :} rArr@
     4) @{ (x < 1/8 ),  ( x = 2^-8 ), ( x > 0) :} rArr@
     5) @x = 2^-8 = 1/2^8 = 1/16^2 = 1/256@

     - Quindi per **#S1** @x = 4@, **#S2** @x = 1/256@

.. note:: L'esercizio seguente va sempre trasformata nella forma @a^x = b@, perchè noi sappiamo risolvere questa forma

4. @3 \* 3^(2x) + 7^(2x+1) = 3^(2x+2)+7^(2x)@

     #) @3 \* 3^(2x) - 3^(2x+2) = 7^(2x) - 7^(2x+1) hArr@ [ *uniamo le potenze con la stessa base* ]
     #) @3 \* 3^(2x) - 3^(2x) \* 3^2 = 7^(2x) - 7^(2x) \* 7 hArr@
     #) @3^(2x) \* (3-9) = 7^(2x) \* (1-7) hArr@
     #) @3^(2x) \*(-6) = 7^(2x) \* (-6) hArr@
     #) @3^(2x) = 7^(2x) hArr@ [per togliere dall'esponente 2x aggiungiamo log in base 10 ad entrambi i membri]
     #) @log_10 3^(2x) = log_10 7^(2x) hArr@
     #) @2x \* log_10 3 = 2x \* log_10 7 hArr@
     #) @x = 0@ è soluzione ed è unica poichè se @x != 0@ posso eliminare dall'equazione @2x@ ottenendo che @log_10 3 = log_10 7@ che è **falso**.

5. @2^(2x) -5^x -4^(x-1) +25^((x/2)-1) = 0@

     #) @2^(2x) -5^x -(2^2)^(x-1) +(5^2)^((x/2)-1) = 0 hArr@ [ *normalizziamo le basi come primo passaggio* ]
     #) @2^(2x) -5^x -2^(2x-2)+5^(x-2) = 0 hArr@
     #) @2^(2x) -5^x -2^(2x) \* 2^-2 +5^x \* 5^-2 = 0 hArr@
     #) @2^(2x) -5^x -2^(2x) \* 1/4 +5^x \* 1/25 = 0 hArr@
     #) @2^(2x) \* 3/4 +5^x \* (-24/25) = 0 hArr@
     #) @x^(2x) \* 3/4 = 5^x \* 24/25 hArr@ [*prendiamo i @log@ per togliere la @x@ dall'esponente*]
     #) @log_2 (2^(2x) \* 3/4) = log_2 (5^x \* 24/25) hArr@
     #) @log_2 (2^(2x)) + log_2 (3/4) = log_2 5^x + log_2 (24/25) hArr@
     #) @(2x) + log_2(3/4) = x \* log_2 5 + log_2 (24/25) hArr@
     #) @(2x) - x \* log_2 5 = log_2 (24/25) - log_2 (3/4) hArr@ [ *il secondo membro, avendo la stessa base si può dividere* ]
     #) @x \* (2 - log_2 5) = log_2 (24/25) \* (4/3) hArr@ [ *noi moltiplichiamo per l'inverso* ]
     #) @x \* log_2 4 - log_2 5 = log_2 (96/75) hArr@ [ *trasformiamo @2@ in @log_2 4@* ]
     #) @x \* log_2 (4/5) = log_2 (96/75) hArr@ [ *applichiamo la stessa proprietà anche al primo membro* ]
     #) @x = log_2 (96/75) / log_2 (4/5)@ [ *Non esiste una formula che ci da il quoziente di due logaritmi* ]

:Lezione del: 27-10-2015



**********************************
Progressione Geometrica
**********************************
| Sia @q in RR, s in NN text( con ) q != 0 and q != 1@

..  centered:: @q + q^2 + q^3 + ... + q^s larr def rarr q \* (1 - q^s) / (1 - q)@

| Defininendo @s = 1@, supponiamo vera per @h rArr@ e proviamo per @h+1@:
| Se @s = 1@, il 1° membro vale @q@, il 2° membro vale @q \* (1-q)/(1-q) = q@
| Se @s = 2@, il 1° membro vale @q+q^2@, il 2° membro vale @q \* (1-q^2)/(1-q) hArr@
| @q \* (1-q)(1+q) / 1-q hArr@ [ *semplifico @1-q@* ] @hArr q \* (1+q) hArr q+q^2@
| *Dimostrazione ( per induzione ):*
| **Ip.** @q + q^2 + q^3 + ... + q^h = q \* (1 - q^h) / (1 - q)@
| **Ts.** @q + q^2 + q^3 + ... + q^h + q^(h+1) = q \* (1 - q^h) / (1 - q) +q^(h+1)@

    1. @q \* (1 - q^h) / (1 - q) +q^(h+1) hArr@
    2. @(q\*(1-q^h)+(1-q)\*q^(h+1)) / (1-q) hArr@
    3. @q - q^(h+1) + q^(h+1) - q^(h+2) / (1-q) hArr@
    4. @q \* (1-q^(h+1)) / (1-q)@ [ *Dimostrata!* ]

La famiglia @{ q; q^2; q^3; ...; q^s}@ si definisce :underline:`progressione geometrica` con @q@ definito **ragione**

.. note:: Se @s = oo@ allora si definisce **successione**

.. note:: Il caso interessante è quando la ragione è diversa da 0 e 1.

| :underline:`Sommatoria` @larr def rarr sum_(n=1)^s q^n = q + q^2 + q^3 + ... + q^s@
| :underline:`Binomio di NEWTON` @larr def rarr (a+b)^n@

| per @n=2 rArr (a+b)^2 = a^2 + 2ab + b^2@
| per @n=3 rArr (a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3@
| @(a+b)^n = (a+b)\*(a+b)\*(a+b)\* ... \*(a+b)@ [ @n@ *fattori* @(a+b)@] @=@

.. centered:: @sum_(h=1)^n ( text( #X ) (a^h \* b^(n-h)))@

| Dove #X è attualmente un incognita...

:Lezione del: 27-10-2015

| #X è il **coefficiente binomiale** ( Approfondire *Calcolo Combinatorio* )
| Quindi @(a+b)^n =@

.. centered:: @sum_(h=1)^n (((n),(h)) (a^h \* b^(n-h)))@

.. note:: Supponiamo che @n >= 2@, perchè per @n<2@ è davvero semplice calcolare, quindi non è interessante

:Lezione del: 29-10-2015