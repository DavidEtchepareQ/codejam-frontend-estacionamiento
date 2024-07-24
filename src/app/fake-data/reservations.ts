const TIPO_RESERVA = [
    { value: 1, text: 'Sólo mañana', description: '8:00 a 14:00' },
    { value: 2, text: 'Sólo tarde', description: '14:00 a 20:00' },
    { value: 3, text: 'Día completo', description: '8:00 a 20:00' },
];

const selectTypeReservation = (value) => TIPO_RESERVA.find(tipo_reserva => tipo_reserva.value == value)

export const RESERVATIONS = [
    {
        fecha_reserva: '2024-07-26',
        tipo_reserva: selectTypeReservation(1),
        estacionamiento: '100',
        estado: 'RESERVADO'
    },
    {
        fecha_reserva: '2024-07-25',
        tipo_reserva: selectTypeReservation(1),
        estacionamiento: '100',
        estado: 'RESERVADO'
    },
    {
        fecha_reserva: '2024-07-24',
        tipo_reserva: selectTypeReservation(1),
        estacionamiento: '100',
        estado: 'RESERVADO'
    },
    {
        fecha_reserva: '2024-07-24',
        tipo_reserva: selectTypeReservation(3),
        estacionamiento: '100',
        estado: 'CANCELADO',
        motivo_cancelacion: 'No lo usare'
    },
    {
        fecha_reserva: '2024-07-23',
        tipo_reserva: selectTypeReservation(3),
        estacionamiento: '100',
        estado: 'RESERVADO'
    },
    {
        fecha_reserva: '2024-07-23',
        tipo_reserva: selectTypeReservation(3),
        estacionamiento: '100',
        estado: 'RESERVADO'
    },
    {
        fecha_reserva: '2024-07-22',
        tipo_reserva: selectTypeReservation(2),
        estacionamiento: '100',
        estado: 'CANCELADO',
        motivo_cancelacion: 'En vacaciones'
    },
    {
        fecha_reserva: '2024-07-19',
        tipo_reserva: selectTypeReservation(2),
        estacionamiento: '100',
        estado: 'RESERVADO'
    },
]