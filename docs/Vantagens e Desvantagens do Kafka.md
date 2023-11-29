# Vantagens e Desvantagens do Kafka
## **Vantagens do Kafka**

Basicamente, as vantagens do Kafka o fazem ideal para a implementação de Data Lakes. Sendo assim, vamos observar detalhadamente essas vantagens:  
### **a) Alta Taxa de Transferência**

Sem a necessidade de maiores recursos de hardware, Kafka é capaz de lidar com dados em altas velocidades e grandes volumes. Também, permite suportar taxas de transferência de mensagens de milhares de mensagens por segundo.
### **b) Baixa Latência**

É capaz de manusear essas mensagens com baixíssima latência em intervalos de milissegundos, exigido pela maioria dos casos de uso mais recentes.
### **c) Tolerância ao Erro**

Uma das melhores vantagens é a tolerância ao erro. Há uma capacidade inerente ao Kafka, que é ser resistente a falhas de nó/máquina em um cluster  .
### **d) Durabilidade**

Aqui, durabilidade diz respeito a persistência dos dados/mensagens em disco. Além disso, a replicação de mensagens é uma das razões por trás da durabilidade, portanto as mensagens nunca são perdidas.
### **e) Escalabilidade**

Sem incorrer em nenhum tempo de inatividade em tempo real ao adicionar nós complementares, Kafka pode ser escalável. Além disso, dentro do cluster do Kafka, a manipulação de mensagens é totalmente transparente e desenrolada.
### **f) Distribuído**

A arquitetura distribuída do Kafka o torna escalável utilizando atributos como replicação e particionamento.
### **g) Capacidades de Message Broker**

Kafka tende a funcionar muito bem como uma substituição aos message brokers mais tradicionais. Aqui, um message broker possui o papel de programa intermediário, traduzindo mensagens do protocolo formal de mensageria do editor para o protocolo formal de mensageria do receptor.
### **h) Alta Simultaneidade**

Kafka pode lidar com milhares de mensagens por segundo com condições de baixa latência e altas taxas de transferência. Também permite a leitura e escrita de mensagens em alta simultaneidade.
### **i) Persistente por Padrão**

Como mencionado anteriormente as mensagens são persistentes, o que as torna duráveis e confiáveis.
### **j) Amigável ao Consumidor**

É possível integrar com uma variedade de consumidores utilizando Kafka. A melhor parte do Kafka é poder se comportar ou agir de maneira diferente de acordo com o consumidor, de forma que integre com sucesso respeitando as diferentes formas que o consumidor tem para lidar com essas mensagens provenientes do Kafka.
### **k) Capacidade de Manipulação de Batch**

Kafka pode também ser empregado para casos de uso com lotes e também desempenham o papel de um ETL tradicional, devido a sua característica de persistência de mensagens.
### **l) Variedade de Aplicações**

É possível gerenciar uma variedade de casos de uso corriqueiros de um Data Lake. Por exemplo, log aggregation, web activity tracking, etc.
### **m) Manipulação em Tempo Real**

Kafka pode lidar com pipelines de dados em tempo real. Essa característica é um dos principais motivos pelo qual essa tecnologia é escolhida.
## **Desvantagens**


### **a) Falta de Ferramentas de Monitoramento**

É notória a ausência de um conjunto completo de ferramentas de gerenciamento e monitoramento. Por isso, equipes de suporte empresarial se sentem receosas ao escolher o Kafka a longo prazo.
### **b) Problemas com Ajuste de Mensagens**

Como sabemos, o broker utiliza de certas chamadas de sistema para entregar mensagens ao consumidor. No entanto, a performance do Kafka é significantemente reduzida se a mensagem precisa de ajustes. Sendo assim, pode performar muito bem se a mensagem é inalterada porque utiliza as funcionalidades do sistema.
### **c) Não utiliza Seleção de Tópicos Coringa**

Há um problema quando o Kafka apenas corresponde a um nome de tópico exato, o que significa que ele não suporta.
### **d) Falta de ritmo de suporte**

Pode haver um problema devido à falta de ritmo, enquanto as APIs necessárias por outras linguagens são mantidas por diferentes indivíduos e empresas.
### **e) Redução de Performance**

Em geral, não há problemas com o tamanho individual de uma mensagem. Porém, os brokers e consumidores começam a comprimir as mensagens assim que seu tamanho passa a aumentar. Por causa disso, quando descompactados, o nó da memória é utilizado lentamente. Também, a compactação ocorre durante o fluxo dos dados pelo pipeline. Isso afeta as taxas de transferência e a performance.
### **f) Comportamento desajeitado**

As vezes, apresenta um comportamento desajeitado e lento, quando o número de consultas em um cluster Kafka aumenta.

### **g) Ausência de Paradigmas de Mensageria**

Alguns dos paradigmas de mensageria estão faltando no Kafka como os de request/reply, consultas point-to-point, entre outros. Não sempre mas para certos casos de uso, isso se torna problemático. 