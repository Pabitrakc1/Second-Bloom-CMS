package com.secondbloom.service;

import com.secondbloom.model.Resident;
import com.secondbloom.model.Story;
import com.secondbloom.repository.ResidentRepository;
import com.secondbloom.repository.StoryRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class StoryService {

    private final StoryRepository storyRepository;
    private final ResidentRepository residentRepository;

    public StoryService(StoryRepository storyRepository,
                        ResidentRepository residentRepository) {
        this.storyRepository = storyRepository;
        this.residentRepository = residentRepository;
    }

    public Story addStory(Long residentId, Story story) {
        Resident resident = residentRepository.findById(residentId)
                .orElseThrow(() -> new RuntimeException("Resident not found"));

        story.setResident(resident);
        story.setCreatedDate(LocalDate.now());

        return storyRepository.save(story);
    }

    public List<Story> getAllStories() {
        return storyRepository.findAll();
    }
}
