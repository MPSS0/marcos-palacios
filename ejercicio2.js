// ==============================================================================
// Ejercicio 10: Acceso a la Aplicación Escolar
// Consigna: Escribir una función llamada `evaluarAccesoApp` que reciba tres parámetros:
// `edad` (Number), `tienePermisoDocente` (Boolean) y `esInvitado` (Boolean).
// Debe retornar `true` si no es invitado y cumple al menos una de estas condiciones:
// es mayor o igual a 18 años O tiene permiso docente. En cualquier otro caso retorna `false`.
// ==============================================================================

function evaluarAccesoApp(edad, tienePermisoDocente, esInvitado) {
    if (esInvitado) {
        return false;
    }

    return edad >= 18 || tienePermisoDocente;
}

// Muy buena simplificación de la condición lógica. Aunque hay una manera más sencilla de resolverlo. OJO con el uso de la IA

console.log(evaluarAccesoApp(16, true, false));  // true
console.log(evaluarAccesoApp(20, false, true));  // false
