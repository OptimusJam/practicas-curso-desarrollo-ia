# 📋 Requisitos Funcionales y No Funcionales – Sistema de Gestión Logística

## 1. Introducción

El sistema debe permitir la gestión de centros logísticos y pedidos, así como la asignación automática de pedidos a centros en función de criterios operativos como capacidad, proximidad y tipo de pedido.

---

# 2. Requisitos Funcionales

## 2.1 Gestión de Centros Logísticos

### RF-01: Creación de centros logísticos

El sistema debe permitir crear un centro logístico con:

* Nombre
* Tipos de pedido soportados (B, M, S o combinaciones)
* Estado
* Capacidad máxima
* Carga actual
* Coordenadas geográficas

**Reglas:**

* No puede existir más de un centro en las mismas coordenadas.
* La carga actual no puede superar la capacidad máxima.

---

### RF-02: Consulta de centros logísticos

El sistema debe permitir obtener la lista de centros existentes.

---

### RF-03: Actualización de centros logísticos

El sistema debe permitir modificar cualquier atributo de un centro.

**Reglas:**

* La carga actual no puede superar la capacidad máxima.

---

### RF-04: Eliminación de centros logísticos

El sistema debe permitir eliminar un centro por su identificador.

---

## 2.2 Gestión de Pedidos

### RF-05: Creación de pedidos

El sistema debe permitir crear pedidos con:

* Identificador de cliente
* Tamaño (B, M o S)
* Coordenadas

**Reglas:**

* Solo un tamaño por pedido.
* Estado inicial: **PENDING**
* Sin centro asignado inicialmente.

---

### RF-06: Consulta de pedidos

El sistema debe permitir obtener todos los pedidos.

---

## 2.3 Asignación de Centros

### RF-07: Proceso de asignación

El sistema debe:

* Identificar pedidos en estado **PENDING**
* Intentar asignarles un centro

---

### RF-08: Criterios de asignación

* Compatibilidad de tipo
* Disponibilidad del centro
* Capacidad suficiente
* Selección del centro más cercano
* Procesamiento por orden de creación

---

### RF-09: Cálculo de distancia

El sistema debe calcular la distancia entre pedido y centro.

---

### RF-10: Resultado de asignación

Para cada pedido:

* ID del pedido
* Estado final (ASSIGNED o PENDING)
* Centro asignado (si aplica)
* Distancia (si aplica)
* Mensaje en caso de fallo

---

### RF-11: Casos de no asignación

* Sin capacidad disponible
* Sin centros compatibles

---

### RF-12: Reprocesamiento

* Solo pedidos PENDING
* No modificar pedidos ya asignados

---

## 2.4 Estados

### Centros:

* AVAILABLE (y otros posibles)

### Pedidos:

* PENDING
* ASSIGNED

---

# 3. Requisitos No Funcionales

## 3.1 Rendimiento

### RNF-01: Tiempo de respuesta

* Las operaciones de consulta deben responder en un tiempo adecuado bajo condiciones normales.
* El proceso de asignación debe ejecutarse de forma eficiente incluso con múltiples pedidos.

---

### RNF-02: Escalabilidad

* El sistema debe poder manejar un crecimiento en el número de centros y pedidos sin degradación significativa del rendimiento.

---

## 3.2 Consistencia y fiabilidad

### RNF-03: Consistencia de datos

* El sistema debe garantizar que las reglas de negocio se cumplen en todo momento.
* No deben producirse estados inconsistentes (por ejemplo, sobreasignación de capacidad).

---

### RNF-04: Tolerancia a errores

* El sistema debe manejar errores de forma controlada, proporcionando mensajes claros.

---

## 3.3 Disponibilidad

### RNF-05: Disponibilidad del sistema

* El sistema debe estar disponible para operar de forma continua durante su uso esperado.

---

## 3.4 Usabilidad

### RNF-06: Claridad en las respuestas

* Las respuestas del sistema deben ser claras, comprensibles y contener información suficiente para interpretar el resultado.

---

## 3.5 Mantenibilidad

### RNF-07: Facilidad de mantenimiento

* El sistema debe estar diseñado de forma que permita modificar reglas de negocio (por ejemplo, criterios de asignación) sin grandes impactos.

---

## 3.6 Auditabilidad

### RNF-08: Trazabilidad

* El sistema debe permitir conocer el resultado de las asignaciones realizadas.
* Debe ser posible identificar qué pedidos fueron procesados y su resultado.

---

## 3.7 Precisión

### RNF-09: Exactitud en cálculos

* El cálculo de distancias debe ser suficientemente preciso para garantizar decisiones correctas de asignación.

---

## 3.8 Integridad

### RNF-10: Validación de datos

* El sistema debe validar los datos de entrada antes de procesarlos.

---

## 3.9 Seguridad (nivel básico)

### RNF-11: Protección de datos

* El sistema debe evitar accesos no autorizados a la información gestionada.

---

## 4. Restricciones generales

* Todas las reglas de negocio deben cumplirse en cada operación.
* El sistema debe reflejar siempre el estado actualizado tras cada acción.
* No se deben generar duplicidades ni inconsistencias.

---


