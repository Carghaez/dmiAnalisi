.. role:: underline
    :class: underline

.. role:: strike
    :class: strike

.. role:: toright
    :class: toright

####################
Calcolo Combinatorio
####################
Sia @n in NN, a_1,a_2,a_3,...,a_n, h <= n text( con ) h in NN@. Scegliamo @h@ di questi oggetti.

.. note:: Ogni volta che scegliamo @h@ di questi oggetti si dice che abbiamo fatto una **disposizione**

****************************
Disposizione
****************************
Si chiama :underline:`disposizione` degli @n@ oggetti su @h@ posti (opp. @n@ oggetti @h@ ad @h@) una scelta **ordinata** (tengo conto dell'ordine) di @h@ oggetti fra gli @n@ oggetti dati.

.. note:: Perchè ordinata? Perchè tengo conto dell'ordine! Infatti @a1,a2,a3@ è diverso da @a2,a1,a3@

Due disposizioni quindi differiscono o perchè il numero di elementi è diverso, o perchè gli elementi sono diversi oppure perchè la disposizione degli elementi è diversa.

Si indica con @D_(n,h)@ il numero delle disposizioni di @n@ oggetti su @h@ posti. Poichè tali elementi non possono essere ripetuti, se ho 3 oggetti da scegliere su 10 oggetti, il primo @a_(i1)@ avrà 10 scelte diverse, @a_(i2)@ ne avrà 9, @a_(i3)@ ne avrà 8 e così via...

.. note:: per @a_(i1)@ abbiamo @n@ modi diversi di scelta, @a_(i2)@ abbiamo @n-1@ modi diversi, @a_(i3)@ saranno @n-3@ modi

Quindi se abbiamo @n = 10@ e @h = 3@, la *disposizione* di @n@ oggetti su @h@ posti @D_(10,3) = 10 \* 9 \* 8@.

.. centered:: @D_(n,h) larr def rarr n(n-1)(n-2)...(n-(h-1))@

.. warning:: Il professore ha sbagliato scrivendo @(n-(h+1))@ alla lavagna

********************************************
Permutazione
********************************************
Se @h = n@ si dice che si ha una :underline:`permutazione` degli @n@ oggetti dati. La permutazione è un particolare caso di Disposizione.

.. note:: Nelle *permutazioni* l'unica differenza che si può avere è l'ordine degli elementi negli @h@(o @n@) posti

Quindi se abbiamo @n = h = 10@, @D_(n,h) = P_n = P_10 = n(n-1)(n-2)...1 = n!@ [ @n@ *fattoriale* ]. Attraverso il fattoriale è quindi possibile scrivere le due formule nel seguente modo:

.. centered:: @D_(n,h) = (n!) / ((n-h)!)@, e @P_n = n!@

****************************
Combinazione
****************************
Si chiama :underline:`combinazione` di @n@ oggetti su @h@ posti ogni scelta ( *non necessariamente ordinata* ) di @h@ oggetti fra gli @n@ dati. Due combinazioni differiscono solo se contengono qualche elemento diverso.

| @C_(n,h) \* P_h = D_(n,h)@, segue che

.. centered:: @C_(n,h) = D_(n,h) / P_h@

@C_(n,h) = (n(n-1)(n-2)...(n-h+1)) / (h!) = ((n),(h))@  che è chiamato  :underline:`coefficiente binomiale`

.. note:: Il *coefficiente binomiale* con @h = 0@ è sempre @1@

:Lezione del: 29-10-2015