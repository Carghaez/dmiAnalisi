.. role:: raw-html(raw)
   :format: html

.. role:: underline
    :class: underline

.. role:: strike
    :class: strike

#################################
Teorema del Buon Ordinamento
#################################

*************************
Nell'insieme @NN@
*************************
| Se @H sube NN@, allora esiste @bar(n) in H@ tale che @bar(n) <= h AA h in H@

.. note:: @bar(n)@ viene chiamato **minimo** di @H@

| *Dimostrazione (per induzione):*
| Se @1 in H@, allora @bar(n) = 1@.
| Se @1 !in H@, allora
| @K = { x in NN: x <= h AA h in H}@, con @K != O/@ (insieme vuoto) perchè @K@ contiene @1@
| Supponiamo che se @p in K@ allora @p+1 in K@
| per il principio di Induzione @K = N@
| Se @bar(h) in H, bar(h)+1 !in K@, Quindi @K != N@
| Necessariamente deve esistere @p_0 in K@ tale che @p_0 + 1 !in K@

| Dimostriamo (Per assurdo) che @p_0@ è il **minimo** di @H@, cioè deve essere @p_0 <= h AA h in H and p_0 in H@ [ vera perchè @p_0 in K@ ]
| Supponiamo che @p_0 !in H@. Quindi @p_0 < h AA h in H@
| Ne segue @p_0 + 1 <= h AA h in H rArr p_0 + 1 in K@ è falsa.

************************
Nell'insieme @ZZ@
************************
| In @ZZ@ si ha che se @H sube ZZ@ non vuoto ed esiste @z_0 in ZZ@ tale che @z_0 <= h AA h in H@ allora @H@ ha il **minimo**.
| *Dimostrazione:*
| Ogni @h in H@ è maggiore o uguale di @z_0@.
| Consideriamo @H^\* = {h - (z_0 -1) AA h in H}@
| @h - z_0 + 1 = h - (z_0 - 1) in ZZ and h - (z_0-1) > 0 rArr@
| @H^\* sube NN rArr EE n_0 in H^\* : n_0 <= p AA p in H^\*@
| @n_0 in H^\*@ significa che @EE h_0 in H : n_0 = h_0 - (z_0 - 1) hArr h_0 = n_0 + z_0 -1@
| @n_0 <= p AA p in H^\* hArr n_0 <= h - (z_0 - 1) AA h in H hArr n_0 + z_0 - 1 <= h AA h in H@
| @n_0 + z_0 - 1@ è il **minimo** di @H@

************************
Nell'insieme @QQ@
************************
In @QQ@ si ha che se @H sube QQ@ non vuoto ed esiste @z_0 in QQ@ tale che @z_0 <= h AA h in H@ non è detto che @H@ abbia minimo. Ad esempio prendiamo @H = { x in Q, x > 0}@, questo insieme @H@ non ha minimo.

.. note:: Prendo tutti i numeri razionali più grandi di @0@

| *Dimostriamo che @H@ non ha minimo (per assurdo):*
| Per assurdo sia @h_0@ il minimo di @H@. Quindi @h_0@ è un numero razionale (@h0 in QQ@) con @h_0 <= h AA h in H@.
| Se io considero @h_0 / 2@, questo è un numero razionale. Se @h_0 = m/p@, @h_0/2 = m/(2p) in Q@. @h_0/2@ è positivo, quindi è un numero razionale maggiore di @0@ (@h_0/2 > 0@).
| Ma allora essendo un elemento razionale positivo deve stare all'interno dell'insieme @H@. Quindi @h_0/2 in H@.
| Ma @0 < h_0 < h_0/2@ è **falsa** poichè @h_0/2 < h_0@. Quindi @h_0@ non è il minimo di @H@.

:Lezione del: 29-10-2015