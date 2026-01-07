package com.secondbloom.controller;

import com.secondbloom.model.Story;
import com.secondbloom.service.StoryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stories")
@CrossOrigin(origins = "http://localhost:5173")
public class StoryController {

    private final StoryService storyService;

    public StoryController(StoryService storyService) {
        this.storyService = storyService;
    }

    @PostMapping("/resident/{residentId}")
    public Story createStory(@PathVariable Long residentId,
                             @RequestBody Story story) {
        return storyService.addStory(residentId, story);
    }

    @GetMapping
    public List<Story> getStories() {
        return storyService.getAllStories();
    }
}
