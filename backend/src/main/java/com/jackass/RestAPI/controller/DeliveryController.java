package com.jackass.RestAPI.controller;

import com.jackass.RestAPI.entity.Delivery;
import com.jackass.RestAPI.exception.AlreadyExistsException;
import com.jackass.RestAPI.exception.NotFoundException;
import com.jackass.RestAPI.repository.DeliveryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/api/orders/deliveries")
@CrossOrigin(origins = "http://localhost:3000")
public class DeliveryController {

    @Autowired
    private DeliveryRepository deliveryRepository;

    //
    //  GET
    //
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<Set<Delivery>> getDeliveries() {
        Set<Delivery> deliveries = deliveryRepository.findAll();
        return ResponseEntity.ok().body(deliveries);
    }

    //
    //  POST
    //
    @RequestMapping(method = RequestMethod.POST)
    public void addDelivery(@RequestParam String name) {
        Set<Delivery> deliveries = deliveryRepository.findAll();
        for (Delivery d : deliveries) {
            if (d.getName().equals(name)) {
                throw new AlreadyExistsException("Such delivery name already exist.");
            }
        }
        Delivery delivery = new Delivery();
        delivery.setName(name);
        deliveryRepository.save(delivery);
    }

    //
    //  DELETE
    //
    @RequestMapping(method = RequestMethod.DELETE)
    public void deleteDelivery(@RequestParam int id) {
        Delivery delivery = deliveryRepository.getDeliveryById(id);
        if (delivery == null) {
            throw new NotFoundException("Wrong delivery ID.");
        }
        deliveryRepository.delete(delivery);
    }
}
