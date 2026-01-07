package com.secondbloom.controller;

import com.secondbloom.model.Interest;
import com.secondbloom.repository.InterestRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/interests")
public class InterestController {

    private final InterestRepository interestRepository;

    public InterestController(InterestRepository interestRepository) {
        this.interestRepository = interestRepository;
    }

    // GET all interests
    @GetMapping
    public List<Interest> getAllInterests() {
        return interestRepository.findAll();
    }
}
