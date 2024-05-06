import React from "react";

export const About = ({open, onOpen}) => {
  const [blink, setBlink] = React.useState(true);

  React.useEffect(() => {
    if (open) setBlink(false);
  }, [open]);

  return (
    <div className="about">
      <img
        src="./img/about.png"
        className={`icon ${blink ? "blinker" : ""} ${open ? "invert" : ""}`}
        onClick={onOpen}
      />
      <div className={`section ${open ? "" : "hidden"}`}>
        <div>
          <div>
            <h1>Meandering: Interface</h1>
          </div>
          <div>
            <p className="ultralighter">
              Inspired by how rivers bend and curve, connecting entire
              ecosystems, Meandering unfolded the cultural, historical,
              spiritual, and ecological trajectories of waterways, reflecting
              the vitality of water, from source to sea. The artistic research
              program set out to trace river systems from the sierras and
              forests of southern Spain, to the heartlands of the Americas and
              the undersurface of the Mediterranean, proposing new routes for
              collaborative research and knowledge production.
              <br />
              <br />
              In newly commissioned texts and a selection of research reports as
              well as critical-contemplative writing, talks, and AV
              documentation, the Meandering digital platform combines rich
              visual documentation with insights from the fields of art, visual
              culture, environmental humanities, ecotheosophy, mysticism,
              critical theory, and decolonial studies. A companion to the book
              of the same name (Sternberg Press, 2024) offers a practical and
              poetic toolset for a dynamic reconciliation between action and
              imagination to address the pressing social and environmental
              challenges of our time.
              <br />
              <br />
              This interface is part of an art and ecology research program of
              the same name curated by Sofia Lemos at TBA21–Academy. By
              exploring social and environmental justice through the lens of
              community-oriented practice, it presents a case for the role of
              artistic research and public programs in revealing our interbeing,
              and shapes new convergences between interdisciplinary and
              interfaith studies.
            </p>
            <br />
          </div>
          <div>
            <h2>Publication</h2>
            <p className="ultralighter">
              <a href="https://tba21.org/Cat_Meandering" target="_blank">
                Meandering publication
              </a>{" "}
              is a part of the project that explores social and environmental
              justice through the lens of community-oriented practice. It
              presents a case for the role of artistic research and public
              programs in revealing our interbeing, and shapes new convergences
              between interdisciplinary and interfaith studies.
              <br />
              <br />
              Through texts and a selection of influential essays—including a
              transhistorical dialogue between the twelfth-century mystic, Ibn
              ‘Arabī and the renowned essayist, Sylvia Wynter—as well as lyrics,
              scent, recipes, critical-contemplative writing, and guided
              meditations, Meandering combines rich visual documentation with
              insights from the fields of art, visual culture, environmental
              humanities, ecotheosophy, mysticism, critical theory, and
              decolonial studies. This volume offers a practical and poetic
              toolset for a dynamic reconciliation between action and
              imagination to address the pressing social and environmental
              challenges of our time.
            </p>
            <br />
          </div>
          <div className="image">
            <h2>Concept and curator</h2>
            <p className="ultralighter">
              <a href="https://tba21.org/meanderingEN" target="_blank">
                Meandering
              </a>{" "}
              (2021–23) is a research program initiated by TBA21–Academy,
              curated by Sofia Lemos.
            </p>
            <div>
              <img alt="Sofia Lemos" src="./img/sofia_lemos.jpg" />
            </div>
            <p className="ultralighter">
              Sofia Lemos is a curator and writer. Between 2021–2023, she was
              Curator at TBA21–Academy, where she led the communities-oriented
              art and ecology research program Meandering. From 2018–2021, she
              was Curator of Public Programmes and Research at Nottingham
              Contemporary and was Associate Editor at The Contemporary Journal.
              Lemos was Associate Curator of Public Programmes to the 2nd Riga
              International Biennial of Contemporary Art—RIBOCA (2020), with
              previous curatorial and research roles at Contour biennale 8, HKW,
              Berlin, PRAXES, Berlin, DRAF, London, and MACBA, Barcelona. Her
              writing has appeared in Art-Agenda, Frieze, Mousse, and numerous
              exhibition catalogues and artist monographs.
            </p>
            <br />
          </div>
          <div>
            <h2>Team</h2>
            <p className="ultralighter">
              Curatorial Assistance: Maya Saravia and Maria Buey Gonzaléz
              <br />
              Design: Lana Jerichová
              <br />
              Digital: Martin Bartoš, Andrej Kučera, Michal Kučerák, Petra
              Linhartová
              <br />
              Editorial: Katrina Black, Beatrice Forchini
              <br />
              Research: Maya Saravia
              <br />
              Production: Ana Ballesteros, Henry Eigenheer, Francisco Estepa,
              and Verónica Mari
              <br />
              Communications: Pablo García Contreras, Maria Gil Sáenz, Victoria
              de Gracia, Patricia Esteban Gonzaléz, Barbora Horská, Katarina
              Rakušček, Arancha Rios, Julia Zafra
            </p>
            <br />
          </div>
          <div>
            <h2>Events</h2>
            <p className="ultralighter">
              “The Journeying Stream” [Pasaje del agua] (co-curated with Daniela
              Zyman, June 3–5, 2022)
              <br />
              “An Ocean Without Shore” [Un océano sin orilla] (November 9–12,
              2022)
              <br />
              “Third Margin Deepest Spring” [Un manantial entre dos aguas]
              (November 10–12, 2023)
            </p>
            <br />
          </div>
          <div>
            <h2>Program Contributors</h2>
            <p className="ultralighter">
              Jesús Alcaide, Lourdes Cabrera, Edgar Calel, Federico Campagna,
              Carolina Caycedo, Emanuele Coccia, Amina González Costa, Jessica
              Ekomane, Sally Fenaux Barleycorn, Elizabeth Gallón Droste, Coco
              Fusco, Francisco Gamero, Francisco Godoy Vega, Lafawndah, Isabel
              Lewis with Guillermo Castro Buendía, Carlos López Campos, Javiera
              de la Fuente, Brooke Holmes, Helena Martos, Laila Tafur, and
              Rosario Vacas, Gracia López Anguita, Juan López Intzín, Gabrielle
              Mangeri, Michael Marder, Ana María Millán, Fernanda Muñoz-Newsome,
              Eduardo Navarro, Claudia Pagès, Cristina Aguilar Porro, Brian W.
              Rogers, Lorenzo Sandoval, Colin Self, Emilija Škarnulytė, Chaveli
              Sifre, Michael Taussig, Medina Tenour Whiteman, Rosa Tharrats, and
              Caique Tizzi.
            </p>
            <br />
          </div>
          <div>
            <h2>Acknowledgments</h2>
            <p className="ultralighter">
              We wish to thank the City of Córdoba and the Region of Andalusia,
              C3A Centro de Creación Contemporánea de Andalucía, Casa Árabe,
              Casa del Agua, Casa-Palacio de los Angulo, Centro de Recepción de
              Visitantes, Colegio Público La Paz, Cuevas del Pino Casas Rurales,
              Culturhaza Arte contemporáneo y Agricultura Ecológica, Delegación
              Territorial de Turismo, Cultura y Deporte de la Junta de Andalucía
              en Córdoba, Escuela Superior de Arte Dramático de Córdoba, Museo
              Regina, Real Jardín Botánico de Córdoba, Fundación António Gala,
              IMTUR - Instituto Municipal de Turismo de Córdoba, La Mariposa de
              Hilo - Escuela de Patronaje y Moda, Bar Limbo, Jugo Vinos Vivos,
              Palacio de Orive, Patio Vesubio, PLATA, Restaurante El Astronauta,
              Restaurante La Boca, Sala Orive and the applicants, volunteers,
              and participants of our programs and activities.
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className="about_oa">
            <img src="./img/OA_type_white.png" />
            <br />
          </div>
          <div className="about_ac">
            <img src="./img/tba21-academy.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
