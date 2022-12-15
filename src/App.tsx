import {useCallback, useState} from 'react';
import styled from 'styled-components';

import {Button} from 'components/Button';
import {Modal} from 'components/Modal';
import {Form, Input, Label} from 'components/Form';
import {Break} from 'components/Break';
import {Drawer} from 'components/Drawer';

export const AppContainer = styled.div`
  // display: flex;

  // justify-content: center;
  // align-items: center;
`;

export const App = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <AppContainer>
      <Button size="xs" variant="filled" onClick={() => setShowDrawer(true)}>
        Show Drawer
      </Button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
        aperiam necessitatibus. Laudantium quisquam possimus reprehenderit
        maiores iure voluptates necessitatibus? Blanditiis expedita in earum
        harum voluptatibus deserunt distinctio quis ipsum mollitia. Maiores vel
        recusandae natus sint, facere officia vero modi, quidem, soluta quae
        repellat odit eius culpa architecto distinctio at? Quod voluptatibus
        beatae necessitatibus excepturi eveniet, nobis error doloremque quo
        ullam. Dolorem consequatur laboriosam, adipisci omnis itaque aliquam
        incidunt assumenda asperiores dolor libero quam, officia commodi
        molestias ullam, corrupti accusantium quaerat! Aliquam expedita illum
        maxime possimus, unde magni officiis veritatis minima? Ipsum, eligendi
        nostrum? Nobis tenetur, obcaecati quisquam delectus consectetur
        voluptatibus unde iusto ut eum eveniet recusandae, mollitia voluptatem
        rerum quae pariatur similique in accusamus quia aut animi distinctio
        perspiciatis laboriosam. Voluptates cumque rerum minus laborum totam
        amet. Quibusdam repellendus, veniam pariatur tempora laborum aspernatur,
        inventore magnam porro soluta aperiam nesciunt expedita incidunt iusto
        ipsa reiciendis saepe at sit tempore delectus! Accusantium consequatur
        dolor pariatur dicta tempore aliquid, earum, modi autem delectus aliquam
        sequi explicabo minima optio doloribus voluptates quo. Voluptate
        eligendi facilis repudiandae tempore saepe nobis, natus hic? Veniam,
        dolores? Vel cumque, debitis suscipit fugit magni asperiores cupiditate,
        alias velit itaque similique voluptatem minus architecto voluptate ipsum
        laborum distinctio. Dicta nihil nemo sapiente quod doloremque numquam
        ipsam, quidem non atque. Doloribus molestiae magnam impedit dolorem
        repellat esse quisquam sunt fuga, ullam sint doloremque explicabo
        voluptate tenetur asperiores dolores! Nesciunt quaerat magnam libero
        maiores debitis assumenda similique dignissimos veritatis perferendis
        officiis? Unde adipisci debitis, ea similique mollitia nulla consectetur
        non error enim commodi? Incidunt, architecto officia! Adipisci, eius
        dolore est quasi doloremque nemo odit explicabo recusandae. Tenetur
        veritatis itaque autem mollitia. Itaque optio nesciunt ducimus vero eos
        animi totam numquam maiores facere, cum quidem sed? Repellat adipisci,
        fugit eligendi iure atque ratione eveniet facere commodi facilis?
        Inventore error laboriosam vel incidunt. Laboriosam delectus eos
        voluptate, necessitatibus aut accusamus iusto dolores qui omnis nesciunt
        eligendi unde veritatis cupiditate harum magnam vel, eaque fugiat esse
        dolorum voluptatibus! Expedita quasi ratione eligendi nihil perferendis.
        Suscipit soluta officiis assumenda. Sint aspernatur rem est. Modi,
        quidem quibusdam ipsam reprehenderit totam facere, numquam, ab illum
        temporibus voluptas consequuntur sit ad porro et laboriosam
        exercitationem. Inventore, ab quas! Quam maxime debitis aliquam,
        perspiciatis eius earum pariatur, error maiores veritatis doloribus
        perferendis tempore sunt ipsa illum odio eveniet atque eum magnam porro
        sequi officiis optio. Consequuntur itaque amet rem! Aperiam quasi
        eligendi eos vitae provident culpa molestiae aliquid illo ratione
        praesentium ducimus libero, delectus dignissimos, cupiditate fugiat
        velit suscipit nam voluptates. Esse, reprehenderit architecto. Itaque
        distinctio maiores vitae quasi! Aperiam similique maxime cumque hic nam
        consectetur, fugit esse modi magnam? Iure corporis culpa recusandae
        similique maiores perspiciatis vitae facere earum dicta? Officia aliquid
        sit inventore unde reprehenderit! Dolor, ad? Perspiciatis autem nesciunt
        suscipit repellat inventore? Aliquid ab laboriosam recusandae officia
        sed officiis iure reprehenderit aliquam, ducimus dignissimos. Dicta
        deserunt suscipit obcaecati! Incidunt magni ratione, deserunt quae
        dolore sint odit! Enim ipsum laborum inventore, fugiat unde
        exercitationem. Error doloremque fugiat vero accusamus iste? Hic
        asperiores animi impedit placeat commodi nostrum fuga, eius molestiae
        quibusdam beatae suscipit adipisci distinctio necessitatibus! Quia.
        Veritatis, commodi corporis soluta deserunt libero iure recusandae
        provident vel perferendis inventore nam dicta harum mollitia, ad sequi
        possimus assumenda dolores quos dolorum quasi praesentium non deleniti.
        Incidunt, commodi sint! Illo vel doloribus quis ex! Debitis, dolores ea?
        Expedita numquam sapiente eaque consequatur sint recusandae aut voluptas
        fuga, eius natus sequi facere! Perspiciatis impedit facilis tempora
        nobis nesciunt culpa! Consequuntur. Quisquam non officiis blanditiis ex,
        dignissimos beatae atque quidem quos minima iure ut voluptate iste hic
        iusto velit? Eligendi fugiat aut deleniti! Nihil rem quis reprehenderit
        odio corrupti eligendi provident? Quos facere totam quam voluptatum eos
        asperiores perspiciatis optio harum repellendus eligendi quidem,
        temporibus quod ut aut sapiente numquam. Eos odit alias placeat facilis
        laudantium molestias, sequi sit in enim? Ipsum ea voluptates, autem
        ducimus assumenda quod repellat fugiat ullam nisi itaque excepturi.
        Impedit, accusantium a ratione error vitae at voluptatem, sequi quas
        atque voluptatum perspiciatis nostrum reprehenderit magni aliquam.
        Dolores fuga labore odit perspiciatis unde rerum beatae quod. Ab est
        ipsam nostrum nihil adipisci, voluptatibus a officia, culpa optio
        aspernatur soluta! Voluptatem quos deleniti velit facere iste,
        accusantium alias. Suscipit magnam omnis vitae nemo fuga praesentium
        molestias sequi, tenetur distinctio blanditiis eum quis repudiandae
        exercitationem ipsum vero nam aspernatur facilis accusamus odit
        doloribus architecto est aperiam eius! Architecto, omnis? Laborum
        corrupti pariatur fugit! Hic aliquid ipsum dolorem dolore totam labore?
        Ipsa eum magni itaque maiores voluptate, dicta architecto dolorum sequi,
        sunt nulla perferendis voluptatem non assumenda tenetur voluptatibus
        ducimus! Recusandae dolorem repellendus voluptates veritatis culpa ea
        sit in, et assumenda. Illo non natus perferendis, amet autem in officia
        ratione sint consequuntur adipisci cumque libero consectetur quam
        dignissimos ducimus! Nemo. Repellat, enim nemo ut quos quaerat
        consequuntur quo cum similique sed totam voluptates! Temporibus delectus
        esse quod sed? Fuga similique commodi quaerat qui veniam mollitia
        tempora est in maiores ducimus. Omnis excepturi, iusto odit quasi harum
        laudantium culpa. Expedita magnam nam odio harum quidem doloribus
        veritatis nihil quia iste deleniti! Minus dolorum, voluptates aliquid
        vel sunt distinctio laboriosam dolore suscipit. Exercitationem et,
        repellat similique temporibus natus facilis error consequatur enim
        placeat reiciendis in nam odio fugiat cupiditate non pariatur saepe
        amet! Voluptate nesciunt soluta perspiciatis tempora quisquam adipisci,
        libero dolorem? Velit molestias molestiae incidunt quia aut quo unde
        facere debitis porro dolorem dolore id atque veniam quos temporibus
        eligendi cupiditate quidem, facilis quae magni. Harum maiores qui
        corrupti tenetur ratione? Veritatis modi non corporis eligendi quasi rem
        nulla cupiditate ipsa consequuntur asperiores dolore sunt magnam, ipsum
        velit distinctio perferendis eos ab! Dolorem quisquam quam eligendi
        animi, consectetur libero saepe ab! Necessitatibus unde nihil assumenda
        cumque voluptatibus voluptates quisquam accusantium blanditiis nisi et
        veritatis ducimus, laboriosam ex ipsa incidunt? Suscipit commodi error
        doloribus expedita ut, inventore eius molestias eum esse ipsam. Ut
        maiores, praesentium excepturi necessitatibus cum eveniet facere.
        Necessitatibus, consequuntur ipsa tempora dolorem, veniam porro
        distinctio aperiam voluptate, nesciunt incidunt quis? Ex, nesciunt a!
        Incidunt facilis tempore illo minus culpa! Architecto sit ratione
        delectus sequi tempore aspernatur. Atque repudiandae rerum porro fugiat
        omnis dolorum sit maxime temporibus soluta cumque consectetur quas
        quibusdam laborum, ducimus nam optio unde dolorem error molestiae!
        Sapiente quis facere maxime error, dicta, natus odit perspiciatis
        architecto quas eius at nisi doloribus voluptatem quia tempore, expedita
        laboriosam dolorum blanditiis quasi temporibus minima! Quaerat iure
        magni doloribus itaque? Fuga voluptatibus voluptate modi perferendis
        ipsum magnam velit temporibus totam vero, eos distinctio praesentium
        animi nobis quia nulla odit, voluptatem ipsam autem quidem optio earum
        cumque veniam natus consequuntur. Odit? Sint consectetur debitis vero,
        quae quam optio modi reprehenderit veritatis nisi doloremque excepturi?
        Tenetur quasi atque nostrum itaque alias laboriosam ex odio distinctio,
        enim ab nulla ut sed saepe non? Perspiciatis impedit voluptatibus
        ratione necessitatibus molestias quia eaque expedita praesentium itaque
        officia autem dolore laudantium, repudiandae explicabo, aspernatur dolor
        voluptates reiciendis accusamus suscipit rem! Laudantium, libero? Quo
        neque hic vero? Iusto doloremque ea, id nesciunt cum natus assumenda
        consequatur perferendis repellat debitis recusandae dignissimos
        quibusdam aperiam eius iste quod excepturi quo tempora libero similique
        animi ex odio hic. Ut, dicta. Alias explicabo vel cum facere,
        repellendus atque culpa. Aut, dolorem cum. Iste distinctio voluptatum
        est, recusandae quidem maiores veritatis repellat totam officia hic,
        aspernatur incidunt ea. Eum necessitatibus maiores quibusdam. Nisi
        sapiente eum labore dolores optio distinctio, ducimus iusto explicabo
        sed, nesciunt accusantium assumenda? Repudiandae natus ut odio molestiae
        voluptate autem exercitationem recusandae, esse illum quasi, in iste,
        fuga ab. Quod modi at, aliquam assumenda vero qui iusto, debitis dolores
        iste nostrum itaque eaque delectus quia! Facilis veritatis eligendi nisi
        architecto veniam, rerum asperiores earum voluptatum modi suscipit magni
        sit? Voluptates dolorem tempora, omnis iure blanditiis porro! Modi dolor
        assumenda id est similique architecto inventore cumque quasi! Ipsa,
        porro neque nihil labore praesentium cumque non quibusdam voluptatibus
        quam explicabo consequatur. Quasi corrupti eaque, repellendus, nobis non
        maxime illum debitis provident animi modi et ipsam velit, natus culpa
        tenetur dignissimos vel quam deserunt fugiat ad veritatis porro placeat?
        Ad, laborum magnam. Pariatur repellat voluptatum minima harum illum,
        dignissimos in sequi suscipit accusantium doloribus, tempora, soluta
        accusamus error animi corrupti. Modi possimus eos quia? Fugit iusto
        magnam, autem nostrum cumque doloremque facilis! Error voluptatem,
        incidunt ad inventore deleniti corporis labore rerum animi dolor
        dignissimos asperiores a. Architecto repellendus at maiores laborum
        dignissimos unde. Adipisci natus laborum fuga ab voluptatibus
        accusantium repellendus. Corporis! At perferendis temporibus accusamus
        possimus eligendi facere deserunt saepe nemo commodi, quis, labore eum
        officia tenetur nisi accusantium atque suscipit nihil reiciendis?
        Exercitationem porro minus dicta, ipsam aspernatur nihil sequi? Magnam
        delectus reprehenderit numquam eos iure, quidem ullam fuga placeat
        veniam blanditiis accusamus dolore nihil sint quis dignissimos ad fugit
        accusantium alias aspernatur quas exercitationem eveniet nisi saepe
        consequatur. Nihil! Ad, ratione. Aperiam in, eos non quae
        necessitatibus, ab impedit velit dolor aliquid est veritatis dolore
        neque tenetur nobis nisi temporibus optio. Illum aspernatur temporibus
        nemo alias explicabo, quis nostrum! Dolores laboriosam beatae
        consequatur natus vero rerum itaque vitae eaque ea facere a placeat
        numquam eos modi, ab nam corporis qui. Consectetur distinctio aperiam
        sed consequuntur explicabo adipisci quaerat molestias. Maiores tenetur
        id aliquid expedita laborum accusamus illo mollitia a sed hic ad,
        soluta, exercitationem quos delectus iste amet ab est, vero ipsa.
        Debitis, aspernatur quod culpa dolorum blanditiis quibusdam. Eligendi
        delectus accusantium minus nesciunt ad rem excepturi necessitatibus
        itaque voluptatum beatae rerum dolor voluptates quis sequi laboriosam a,
        ea magnam laudantium sunt soluta recusandae consequuntur explicabo.
        Iure, ducimus minus. Similique in amet, explicabo ex vero, architecto
        velit distinctio nemo error modi ab mollitia vitae perferendis rerum
        delectus quia a labore autem itaque atque quibusdam dolorem nulla,
        voluptate veniam. Perspiciatis? Quam hic omnis commodi, molestias ab
        nesciunt velit dolorem facilis! Alias, necessitatibus sit. Esse optio
        molestiae rerum non totam magni minus voluptate quis. Dolorem autem
        asperiores dolorum nisi repudiandae enim. Repellendus hic incidunt
        obcaecati, recusandae molestiae, reprehenderit voluptatibus molestias
        sapiente libero odit rerum veniam? Ea, aperiam eum dicta, earum, nulla
        cupiditate ex dolorem veritatis nobis assumenda ad autem repudiandae
        qui. Distinctio commodi earum rem sunt adipisci non autem. Ad
        repudiandae dignissimos eos, ut velit ipsa perspiciatis atque
        voluptatibus in nostrum enim saepe magni, expedita laboriosam a
        explicabo officia eaque harum? Assumenda, vero vitae nostrum asperiores
        dolores praesentium quo illum eum voluptatum mollitia commodi corporis,
        earum vel perferendis veritatis fugiat distinctio necessitatibus
        voluptate! Enim consequuntur adipisci fugit iure, quasi minus
        laboriosam! At deserunt temporibus sed. Temporibus doloribus culpa quos
        rem in non consequatur dolore id nobis repellat architecto, atque quo
        unde laboriosam, soluta adipisci assumenda accusantium. Tenetur,
        quisquam. Ipsa, cumque deserunt. Natus laboriosam corporis doloremque
        placeat, magni laudantium exercitationem fuga. Tempora, sint obcaecati
        est eum nesciunt itaque fugit a. Delectus quisquam quis eius unde
        veritatis distinctio ut recusandae inventore, excepturi voluptates?
        Similique doloremque labore distinctio perspiciatis natus ad mollitia
        provident illo consequuntur itaque placeat consequatur doloribus eveniet
        maxime velit optio ipsa laboriosam, eaque obcaecati officiis sunt sit!
        Consequuntur suscipit quisquam quaerat. Repellendus, provident? Fuga ad
        similique sapiente magni iusto nam, repudiandae maiores reprehenderit,
        repellat illo nisi necessitatibus nulla, temporibus hic eos tenetur
        aspernatur illum dicta animi placeat quod! Harum, voluptatem
        reprehenderit. Sint nemo eveniet molestias, excepturi a reprehenderit
        deserunt hic fugit sapiente, totam enim temporibus animi maxime
        recusandae, officiis quidem alias culpa veniam facere? Alias unde
        itaque, aliquid voluptates velit ea! Eaque, amet error! Hic vero soluta
        sit molestiae incidunt consectetur animi voluptatem qui. Nisi deserunt
        dolorem beatae, similique animi eos. Nihil nisi quis soluta provident
        blanditiis rem, unde recusandae distinctio. Optio ullam architecto saepe
        error unde soluta. Ratione nihil asperiores dolor odit ducimus fugit,
        sapiente ipsa officiis, recusandae quas ullam aperiam magni architecto.
        Voluptatem tempora quam magni dignissimos. Alias, corrupti! Numquam
        repellat at exercitationem quod autem quo sint? In molestias
        necessitatibus sint quasi consectetur amet molestiae nam, reprehenderit
        nemo, autem soluta sapiente. Voluptate sequi eius iusto commodi
        temporibus necessitatibus alias! Ipsa vel delectus adipisci deleniti. Id
        minima quasi quia voluptate dolorum nesciunt temporibus ducimus.
        Doloribus atque ipsum temporibus eveniet! Ipsum explicabo cupiditate ex
        officiis aliquam omnis vero eligendi ratione natus! Consequatur harum
        cum doloribus temporibus porro libero nam eos unde, modi incidunt iusto
        dolores in saepe dolor provident sed maiores! Animi aliquam cum adipisci
        officia dolor ab accusamus in repellendus! Officiis nihil, veniam sequi
        illum at placeat eaque dolores doloremque necessitatibus laudantium! In
        inventore, eligendi, tenetur recusandae ab autem non, ut adipisci
        accusantium quidem enim dolor ex! Harum, qui atque. Praesentium dolore
        velit ab doloremque inventore nobis non quas sequi ad saepe cum natus
        incidunt, quis mollitia magnam reprehenderit dolorum quia iste omnis
        esse repellat totam necessitatibus? Laudantium, facilis dolor!
        Veritatis, quibusdam debitis atque perferendis nihil, repellat ipsa esse
        consequatur repudiandae molestiae sit recusandae velit consectetur saepe
        reprehenderit quaerat excepturi beatae ullam porro error dolor
        exercitationem voluptate! Aperiam, ipsam a! Velit et amet earum omnis
        accusamus, provident, dolorem distinctio assumenda, odit minima placeat
        delectus tempore. Delectus, esse repellat. Neque cupiditate nesciunt
        tempora rem? Optio vitae sit dolorum, fugit eum vero. Qui quaerat fugiat
        dicta. Distinctio rem molestias dolores repellat aspernatur illum
        pariatur ullam mollitia quo sunt ab at nulla, officia alias facilis
        totam illo consectetur eaque porro commodi nemo eligendi? Repudiandae
        iure explicabo error porro! Quisquam sit adipisci id quidem alias optio
        quibusdam quam voluptatum dignissimos deleniti, amet quis natus quaerat
        maxime, obcaecati iure placeat laborum, nisi sed minima labore.
        Veritatis voluptas labore iste id? Tempore libero molestiae ut
        consectetur magni, soluta quos saepe id, sit nulla eos odit, alias a
        eveniet optio. Odit molestias quibusdam nam accusantium quasi! Qui.
        Optio aliquid atque porro exercitationem eligendi magni est temporibus,
        tempora id corporis doloremque error nobis expedita nihil voluptates
        illum itaque dolorum amet quaerat eos culpa facere? Provident
        accusantium praesentium modi! Vero in illum, sapiente, aperiam modi
        nostrum nulla illo eligendi delectus velit qui recusandae optio officia
        vitae maiores amet cum quis, non nisi? Rerum necessitatibus facilis illo
        omnis, nesciunt quibusdam. Modi quo ipsam, dolorum obcaecati dolores
        dolore, facilis voluptatibus enim minima rem natus qui iusto tempora
        odio inventore iure. Optio, porro. Autem ipsum minus quam repellat
        laborum sunt dolor modi. Atque tempora totam reiciendis soluta amet.
        Labore illo quidem enim libero repellendus, sunt, atque, provident ut
        laborum blanditiis totam fugiat? Veritatis dolores natus nostrum
        deserunt magni provident debitis culpa incidunt. Iure libero adipisci
        eos illum! Commodi sapiente nostrum dolores ducimus sint, molestias
        rerum! Sunt iusto facere at repellendus consequuntur nostrum animi
        deserunt necessitatibus pariatur, eaque ipsa! Quidem ducimus explicabo
        dicta? Quos recusandae quis provident eos, alias, consectetur adipisci
        totam blanditiis corrupti maxime nisi reprehenderit unde dolore.
        Molestiae cupiditate fugit sunt quasi! Inventore quasi reprehenderit
        eveniet atque quo voluptates cupiditate deleniti? Et reiciendis sit
        architecto distinctio ratione culpa exercitationem alias sed quidem,
        corporis temporibus tempore nisi numquam voluptate odio animi molestiae
        dolore. Ducimus voluptatibus ipsum eligendi fuga harum quibusdam ullam
        quo. Aperiam ab qui porro soluta voluptatum quo, libero unde. Deleniti
        odio, esse asperiores corrupti fuga officia numquam placeat voluptate,
        eligendi blanditiis provident, tenetur laudantium quibusdam omnis
        perspiciatis quo consectetur dignissimos. Accusantium, aut veritatis
        velit quisquam laborum ex repellat qui, est, quos nihil ipsam dicta.
        Amet dolores, eligendi corrupti obcaecati animi unde! Dolore numquam
        incidunt, perferendis saepe perspiciatis placeat! Libero, repudiandae.
        Repellat ea blanditiis vitae, commodi fugit non praesentium ducimus,
        nostrum quas excepturi cupiditate illum. Atque suscipit dolores, rem
        vitae perspiciatis corrupti optio dignissimos nemo, repellendus commodi,
        eveniet quo necessitatibus molestiae! Dolor quisquam enim porro commodi,
        ducimus harum esse quis modi accusamus officia possimus facere nam
        ratione nostrum numquam ab maiores at! Explicabo hic fugiat blanditiis
        quibusdam minus illo doloremque quas. Officiis, ullam, voluptates
        aperiam facilis vero, tempora possimus repudiandae rem sint eligendi
        illo pariatur ducimus saepe! Eum neque architecto reiciendis
        perferendis? Minus voluptate laborum, sequi suscipit eum modi dolore
        non. Cupiditate iure necessitatibus maiores culpa aspernatur, eum quis
        dolorum itaque quasi vero quo voluptatibus, magni rerum placeat
        provident est labore repellendus natus deleniti distinctio corporis quod
        nisi sit cum. Ex. Unde blanditiis magnam quidem repudiandae dicta
        impedit vitae totam, debitis provident aspernatur magni itaque pariatur
        dolorum. Mollitia alias, optio, est quo excepturi iste neque eos impedit
        nisi corrupti in ipsum! Hic, consequatur! Voluptatibus, fugit
        consequuntur excepturi iure alias atque maiores soluta molestias modi
        sapiente temporibus nisi veritatis repellat architecto tempora obcaecati
        consectetur totam distinctio assumenda quidem cumque corrupti reiciendis
        unde. Rerum voluptatem repellendus vero blanditiis perspiciatis
        dignissimos autem sunt eius molestias dolorem, earum maiores? Suscipit
        adipisci omnis iure, consectetur esse animi distinctio amet. Quibusdam
        obcaecati praesentium ratione doloremque iusto explicabo? Deleniti iure
        laboriosam officiis vel animi error ratione cumque nihil ut accusamus
        sed nesciunt molestias facilis repellendus recusandae consectetur,
        delectus libero soluta ipsa ad praesentium autem! Unde excepturi
        accusamus libero! Maiores sit soluta corporis officia repellendus veniam
        vero fugiat eaque, voluptates fugit nihil ad minus voluptatibus
        voluptatum nobis illum consequatur et eveniet similique nulla excepturi
        recusandae nam! Sunt, eius illum. Mollitia et harum sapiente fugiat ipsa
        nihil accusantium neque reiciendis. Necessitatibus blanditiis modi
        dolorum autem assumenda exercitationem, dolores repudiandae atque magnam
        reprehenderit nulla quam odio sequi deleniti neque cupiditate in?
        Temporibus illo excepturi id velit corporis dolores praesentium aperiam
        eos doloribus amet! Facilis laborum voluptatem aspernatur! Sit ut vitae
        quis omnis natus reprehenderit minus neque, maiores sunt asperiores,
        mollitia eos. Dicta veniam earum eum debitis consequatur perspiciatis
        illum ex porro at quisquam expedita, praesentium qui temporibus cumque,
        vero, quae dolores a harum unde ipsa. Dolor ex soluta deleniti incidunt
        inventore. Qui voluptatibus, ipsa hic modi vero sit temporibus ea facere
        iusto distinctio, libero provident facilis consequatur molestiae? Ea
        voluptate nostrum dignissimos suscipit natus amet, reiciendis similique?
        Cumque veniam ipsa blanditiis! Aliquam, praesentium minus sequi
        reiciendis dolorum iure amet. Accusantium, odio, incidunt provident quod
        laudantium distinctio nobis ipsa quaerat quasi sunt voluptates. Error,
        est! Impedit ullam ad vitae aliquam quam est. Quisquam molestiae quidem
        praesentium numquam esse laborum vel culpa voluptatibus ipsa
        exercitationem expedita excepturi, laudantium at ratione voluptate
        aperiam atque ut. Rem aspernatur nisi neque fugiat quae reprehenderit
        aperiam maiores. Veritatis, est ab nobis quas quidem perferendis omnis
        porro quis sit accusamus, nemo odit et dignissimos eaque cupiditate
        minima voluptatum consequuntur libero esse at praesentium laboriosam,
        fugiat aliquam. Quia, sint? Id nemo deleniti ipsam, neque vel aspernatur
        molestiae esse voluptate consectetur, ducimus doloremque delectus!
        Assumenda perferendis iste dignissimos a doloremque quos, fugiat vero
        asperiores eaque modi libero ex, perspiciatis totam.
      </p>

      {/* <Modal
        open={showDrawer}
        onClose={useCallback(() => setShowDrawer(false), [])}
        size="md"
        // overlayOpacity={0.9}
        title="Introduce yourself!">
        <Form>
          <Label htmlFor="firstName">First Name</Label>
          <Break />
          <Input id="firstName" type="text" placeholder="First name" />

          <Label sx={{marginTop: '20px'}} htmlFor="lastName">
            Last Name
          </Label>
          <Break />
          <Input id="lastName" type="text" placeholder="Last Name" />

          <Label sx={{marginTop: '20px'}} htmlFor="email">
            Email
          </Label>
          <Break />
          <Input id="email" type="email" placeholder="Email" />

          <Label sx={{marginTop: '20px'}} htmlFor="password">
            Password
          </Label>
          <Break />
          <Input id="password" type="password" placeholder="Password" />

          <Label sx={{marginTop: '20px'}} htmlFor="confirmPassword">
            Confirm Password
          </Label>
          <Break />
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
          />


        </Form>
      </Modal> */}

      <Drawer
      size='500px'
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
        title="Drawer header">
        <Form>
          <Label htmlFor="firstName">First Name</Label>
          <Break />
          <Input id="firstName" type="text" placeholder="First name" />

          <Label sx={{marginTop: '20px'}} htmlFor="lastName">
            Last Name
          </Label>
          <Break />
          <Input id="lastName" type="text" placeholder="Last Name" />

          <Label sx={{marginTop: '20px'}} htmlFor="email">
            Email
          </Label>
          <Break />
          <Input id="email" type="email" placeholder="Email" />

          <Label sx={{marginTop: '20px'}} htmlFor="password">
            Password
          </Label>
          <Break />
          <Input id="password" type="password" placeholder="Password" />

          <Label sx={{marginTop: '20px'}} htmlFor="confirmPassword">
            Confirm Password
          </Label>
          <Break />
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
          />

          <Label htmlFor="firstName">First Name</Label>
          <Break />
          <Input id="firstName" type="text" placeholder="First name" />

          <Label sx={{marginTop: '20px'}} htmlFor="lastName">
            Last Name
          </Label>
          <Break />
          <Input id="lastName" type="text" placeholder="Last Name" />

          <Label sx={{marginTop: '20px'}} htmlFor="email">
            Email
          </Label>
          <Break />
          <Input id="email" type="email" placeholder="Email" />

          <Label sx={{marginTop: '20px'}} htmlFor="password">
            Password
          </Label>
          <Break />
          <Input id="password" type="password" placeholder="Password" />

          <Label sx={{marginTop: '20px'}} htmlFor="confirmPassword">
            Confirm Password
          </Label>
          <Break />
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
          />

          <Label htmlFor="firstName">First Name</Label>
          <Break />
          <Input id="firstName" type="text" placeholder="First name" />

          <Label sx={{marginTop: '20px'}} htmlFor="lastName">
            Last Name
          </Label>
          <Break />
          <Input id="lastName" type="text" placeholder="Last Name" />

          <Label sx={{marginTop: '20px'}} htmlFor="email">
            Email
          </Label>
          <Break />
          <Input id="email" type="email" placeholder="Email" />

          <Label sx={{marginTop: '20px'}} htmlFor="password">
            Password
          </Label>
          <Break />
          <Input id="password" type="password" placeholder="Password" />

          <Label sx={{marginTop: '20px'}} htmlFor="confirmPassword">
            Confirm Password
          </Label>
          <Break />
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
          />

          <Label htmlFor="firstName">First Name</Label>
          <Break />
          <Input id="firstName" type="text" placeholder="First name" />

          <Label sx={{marginTop: '20px'}} htmlFor="lastName">
            Last Name
          </Label>
          <Break />
          <Input id="lastName" type="text" placeholder="Last Name" />

          <Label sx={{marginTop: '20px'}} htmlFor="email">
            Email
          </Label>
          <Break />
          <Input id="email" type="email" placeholder="Email" />

          <Label sx={{marginTop: '20px'}} htmlFor="password">
            Password
          </Label>
          <Break />
          <Input id="password" type="password" placeholder="Password" />

          <Label sx={{marginTop: '20px'}} htmlFor="confirmPassword">
            Confirm Password
          </Label>
          <Break />
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
          />

          <Label htmlFor="firstName">First Name</Label>
          <Break />
          <Input id="firstName" type="text" placeholder="First name" />

          <Label sx={{marginTop: '20px'}} htmlFor="lastName">
            Last Name
          </Label>
          <Break />
          <Input id="lastName" type="text" placeholder="Last Name" />

          <Label sx={{marginTop: '20px'}} htmlFor="email">
            Email
          </Label>
          <Break />
          <Input id="email" type="email" placeholder="Email" />

          <Label sx={{marginTop: '20px'}} htmlFor="password">
            Password
          </Label>
          <Break />
          <Input id="password" type="password" placeholder="Password" />

          <Label sx={{marginTop: '20px'}} htmlFor="confirmPassword">
            Confirm Password
          </Label>
          <Break />
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
          />

          <Label htmlFor="firstName">First Name</Label>
          <Break />
          <Input id="firstName" type="text" placeholder="First name" />

          <Label sx={{marginTop: '20px'}} htmlFor="lastName">
            Last Name
          </Label>
          <Break />
          <Input id="lastName" type="text" placeholder="Last Name" />

          <Label sx={{marginTop: '20px'}} htmlFor="email">
            Email
          </Label>
          <Break />
          <Input id="email" type="email" placeholder="Email" />

          <Label sx={{marginTop: '20px'}} htmlFor="password">
            Password
          </Label>
          <Break />
          <Input id="password" type="password" placeholder="Password" />

          <Label sx={{marginTop: '20px'}} htmlFor="confirmPassword">
            Confirm Password
          </Label>
          <Break />
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
          />

          <Label sx={{marginTop: '20px'}} htmlFor="confirmPassword">
            Last one
          </Label>
          <Break />
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
          />
        </Form>
      </Drawer>
    </AppContainer>
  );
};

export default App;
