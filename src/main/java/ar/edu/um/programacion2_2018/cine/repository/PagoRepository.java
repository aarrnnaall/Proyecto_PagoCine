package ar.edu.um.programacion2_2018.cine.repository;

import ar.edu.um.programacion2_2018.cine.domain.Pago;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Pago entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PagoRepository extends JpaRepository<Pago, Long> {

}
