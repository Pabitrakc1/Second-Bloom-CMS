package com.secondbloom.service;

import com.secondbloom.model.Resident;
import com.secondbloom.repository.ResidentRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ResidentService {

    private final ResidentRepository residentRepository;

    public ResidentService(ResidentRepository residentRepository) {
        this.residentRepository = residentRepository;
    }

    public Resident addResident(Resident resident) {
        resident.setCreatedDate(LocalDate.now());
        return residentRepository.save(resident);
    }

    public List<Resident> getAllResidents() {
        return residentRepository.findAll();
    }
}
