## Challenge de Eng Manager Lemon
Este Challenge no apunta a buscar a un Engineering Manager que conozca todas las tecnologias que se piden, sino que busca ver la capacidad de resolucion que pueda llegar a tener para buscar informacion y resolver de forma rapida problemas que se le vayan presentando.

El objetivo de este challenge es levantar en una cuenta de AWS este docker con un Load Balancer, de forma tal que pueda accederlo desde internet. La unica restriccion es utilizar ECS y Fargate para levantarlo.

La evaluacion sera ver como este ECS se puede levantar en internet y devolver un "Hello ${NAME}!" cambiandolo a partir de las variables de ambientes en el task definition del ECS en distintos deploys.

La prueba sera que pueda mostrarse como se accede a la URL del container mostrando un nombre por ejemplo "Hello Lemon!", mostrar como se redeployea el servicio, y que en el segundo deploy diga otro nombre como por ejemplo "Hello Guido!"

Si bien no se explicita exactamente los distintos entregables esperados, mientras mas entregables haya, como por ejemplo el setup de un CI/CD, IaC, etc... el resultado sera considerado mejor.

El tiempo de resolucion para este challenge es de maximo una semana.