.. role:: underline
    :class: underline

.. role:: strike
    :class: strike

.. role:: toright
    :class: toright

############################
Dimostrazioni Matematiche
############################

**************************
Principio di Induzione
**************************
Viene utilizzato quando è richiesta la dimostrazione di una proposizione @P@ ( :underline:`ipotesi induttiva` ) che vale per i numeri naturali @NN@.
Esso afferma che:

1. :underline:`Base di induzione`: Se @P@ è vera per @n = 0@, cioè @P(0)@ è vera
2. :underline:`Passo induttivo`: Se @P@ è vera per @n@ allora @P@ è vera per @n + 1@, cioè @P(n)@ vera implica @P(n+1)@ vera

Come usare il principio di induzione
=====================================
Supponiamo di avere una proposizione @P(n)@ da dover dimostrare @AA n in N@ o più in generale per ogni @n >= k@ con @k = 0,1,2,3...@

1. **Base di induzione**:

     a) Si sostituisce il valore iniziale @k@ all'interno della proposizione e si verifica che si è ottenuta un'espressione vera.

2. **Passo induttivo**

     a) Si suppone che sia vera @P(n)@ ( *ipotesi induttiva* ).
     b) Si va a sostituire @n+1@ al posto di @n@ in @P(n)@ ottenendo @P(n+1)@ e si dimostra che anche @P(n+1)@ è vera.

Una volta ricavata @P(n+1)@ con qualche passaggio algebrico (che può essere più o meno semplice) ci si deve ricondurre a scrivere @P(n+1) = P(n)@ più, meno, per, diviso "qualcosa". A questo punto scatta l'ipotesi induttiva e vado a sostituire al posto di @P(n)@ la sua espressione e faccio i vari conti che mi si presentano. Se tutto è andato per il verso giusto dovrei aver ottenuto l'espressione di @P(n+1)@ ottenuta al punto (2b).

Fine! Grazie al principio di induzione posso infatti affermare che la mia proposizione è vera per ogni @n >= k@
