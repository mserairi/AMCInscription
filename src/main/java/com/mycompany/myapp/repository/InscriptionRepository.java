package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Inscription;
import java.util.List;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the Inscription entity.
 */
@SuppressWarnings("unused")
@Repository
public interface InscriptionRepository extends JpaRepository<Inscription, Long> {
    // @Query("select inscription from Inscription inscription join inscription.inscrit enfant join enfant.Parent parent where parent.login = ?#{principal.username}")
    List<Inscription> findByInscritParentLogin(String userlogin);
}
