import { createContext, useContext } from 'react';
import { PatientType, PatientsContextType } from '../Types';

export const PatientsContext = createContext<PatientsContextType>({
	patients: [],
	setPatients: patients => console.warn('no patient yet')
});

export const usePatients = (): PatientsContextType => useContext(PatientsContext);
