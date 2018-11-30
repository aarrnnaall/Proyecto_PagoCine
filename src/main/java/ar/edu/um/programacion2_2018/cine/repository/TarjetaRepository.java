package ar.edu.um.programacion2_2018.cine.repository;

import ar.edu.um.programacion2_2018.cine.domain.Tarjeta;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Tarjeta entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TarjetaRepository extends JpaRepository<Tarjeta, Long> {

}
