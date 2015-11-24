.. role:: raw-html(raw)
   :format: html

.. role:: underline
    :class: underline

.. role:: strike
    :class: strike

##############################################
Somma dei quadrati dei primi n numeri naturali
##############################################

| @sum_(h=1)^n h^2 = (n(n+1)(2n+1)) / 6@
| *Dimostrazione (per induzione):*
| Primo passo dell'induzione: poniamo @n=2@
| @1^2 + 2^2 = 5 hArr (2*3*5) / 6 = 5@
| Secondo passo dell'induzione:
| **Ip.** @sum_(h=1)^p h^2 = (p(p+1)(2p+1)) / 6@
| **Ts.** @sum_(h=1)^(p+1) h^2 = ((p+1)(p+2)(2p+3)) / 6@

1. @sum_(h=1)^(p+1) h^2 = 1^2 + 2^2 + 3^2 + ... + p^2 + (p+1)^2 =@
2. @= (p(p+1)(2p+1)) / 6 + (p+1)^2 =@
3. @=(p+1)[(p(2p+1))/6 + p+1]@

A questo punto metto al secondo membro la tesi e divido per @(p+1)@ entrambi i membri:

1. @(p(2p+1))/6 + p+1 = ((p+2)(2p+3)) / 6 rArr@ [ *se provo questa uguaglianza ho finito* ]
2. @(2p^2+p)/6 + p + 1 = (2p^2+3p+4p+6)/6@
3. @(2p^2+p)/6 + p + 1 = (2p^2+7p+6)/6@
4. @(2p^2+p+6p+6)/6 = (2p^2+7p+6)/6@
5. @(2p^2+7p+6)/6 = (2p^2+7p+6)/6@ [ *Dimostrato!* ]

:Lezione del: 29-10-2015