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