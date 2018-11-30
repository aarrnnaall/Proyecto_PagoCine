package ar.edu.um.programacion2_2018.cine.web.rest;

import ar.edu.um.programacion2_2018.cine.repository.ClienteRepository;
import ar.edu.um.programacion2_2018.cine.repository.PagoRepository;
import ar.edu.um.programacion2_2018.cine.repository.TarjetaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
public class ValidacionResourse {
@Autowired
private TarjetaRepository tarjetaRepository;
@Autowired
private ClienteRepository clienteRepository;
@Autowired
private PagoRepository pagoRepository;

}
