package com.example.chess_pro_backend.service;

import com.example.chess_pro_backend.dto.UserDetailsDTO;
import com.example.chess_pro_backend.model.UserTable;
import com.example.chess_pro_backend.repository.UserDetailsRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserDetailsService {

    @Autowired
    private UserDetailsRepo userDetailsRepo;

    public List<UserDetailsDTO> getAllUsers() {
        List<UserTable> userDetailsList = userDetailsRepo.findAll();
        return userDetailsList.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public UserDetailsDTO getUserById(int userId) {
        Optional<UserTable> optionalUser = userDetailsRepo.findById(userId);
        return optionalUser.map(this::convertToDTO).orElse(null);
    }

    public UserDetailsDTO createUser(UserDetailsDTO userDetailsDTO) {
        UserTable userDetails = convertToEntity(userDetailsDTO);
        userDetails = userDetailsRepo.save(userDetails);
        return convertToDTO(userDetails);
    }

    public UserDetailsDTO updateUser(int userId, UserDetailsDTO userDetailsDTO) {
        Optional<UserTable> optionalUser = userDetailsRepo.findById(userId);
        if (optionalUser.isPresent()) {
            UserTable userDetails = optionalUser.get();
            userDetails.setEmail(userDetailsDTO.getEmail());
            userDetails.setMobileNumber(userDetailsDTO.getMobileNumber());
            userDetails.setName(userDetailsDTO.getName());
            userDetails = userDetailsRepo.save(userDetails);
            return convertToDTO(userDetails);
        }
        return null;
    }

    public void deleteUser(int userId) {
        userDetailsRepo.deleteById(userId);
    }

    private UserDetailsDTO convertToDTO(UserTable userDetails) {
        UserDetailsDTO userDetailsDTO = new UserDetailsDTO();
        BeanUtils.copyProperties(userDetails, userDetailsDTO);
        return userDetailsDTO;
    }

    private UserTable convertToEntity(UserDetailsDTO userDetailsDTO) {
        UserTable userDetails = new UserTable();
        BeanUtils.copyProperties(userDetailsDTO, userDetails);
        return userDetails;
    }
}
