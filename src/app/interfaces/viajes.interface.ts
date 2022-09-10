
export interface peticionViaje {
    viajero: {
        id:              number
        nombreYApellido: string
    }
    ciudadID:            number
    vehiculo: {
        id:              number
        tipoVehiculoID:  number
        tipoVehiculo: {
            id:          number
            descripcion: string
        }
        patente:         string
        marca:           string
    }
    fecha:               Date
    cantidadDias:        number
}