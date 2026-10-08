(function () {
  'use strict';

  // Topic Dataset
  var topicData = {
    physics: {
      title: "Faraday-Lenz Dynamics & Electromagnetic Induction",
      icon: "⚡",
      tagTop: "B-Field Flux: Φ = ∫ B • dA",
      tagBottom: "Induced EMF: ε = -dΦ/dt (Lenz Rule)",
      simMode: "Real-Time 3D Vector Flux Field (60 FPS)",
      simGeo: "Continuous Helical Solenoid + Moving Dipole",
      simFriction: "Overcoming static 2D confusion of flux opposition (- sign)",
      pedagogy: [
        {
          heading: "Core Pedagogical Invariant",
          text: "A changing magnetic flux dΦ/dt creates a non-conservative circular electric field in surrounding space."
        },
        {
          heading: "Identified Cognitive Friction",
          text: "Students confuse field magnitude B with rate of field change dB/dt; fail to visualize why nature opposes flux changes.",
          isFriction: true
        },
        {
          heading: "Physical Spatial Analogy",
          text: "An elastic coil spring resisting compression: magnetic field lines behaving like physical filaments pushing back against an incoming pole."
        }
      ],
      scriptEnglish: [
        { timing: "0:00 - 0:15", text: "Imagine magnetic field lines as stretched elastic bands. When a bar magnet dives toward a copper ring, the ring doesn't stay passive—it generates its own opposing field to actively push the magnet back." },
        { timing: "0:15 - 0:30", text: "That minus sign in Faraday's law isn't an arbitrary mathematical rule. It's nature enforcing the conservation of energy. In this 3D module, watch the induced electron eddy currents rotate counterclockwise to repel the incoming North pole." }
      ],
      scriptHinglish: [
        { timing: "0:00 - 0:15", text: "Magnet ko jab coil ke paas laate ho, toh coil aasaani se aane nahi deta! Wo apna khud ka opposite magnetic field create karta hai—jisko hum Lenz's Law kehte hain." },
        { timing: "0:15 - 0:30", text: "Faraday ke formula me jo minus sign (-dΦ/dt) dikhta hai, wo energy conservation ka pehra hai. 3D simulation me dekho kaise induced electrons circular path me ghoom kar North pole ko repel kar rahe hain." }
      ],
      spatialSpec: JSON.stringify({
        "scene_type": "electromagnetic_induction_3d",
        "geometry": {
          "solenoid_mesh": { "coils": 12, "radius": 0.45, "wire_gauge": "copper_pbr" },
          "dipole_magnet": { "velocity_vector": [0, -1.2, 0], "pole_orientation": "N_DOWN" }
        },
        "field_vectors": {
          "flux_lines": { "count": 128, "dynamic_deformation": true, "density_mapping": "B_field" },
          "induced_eddy_currents": { "color": "#06B6D4", "particle_flow": "CCW", "amperage_scale": 4.8 }
        },
        "camera_rig": {
          "orbit_trajectory": { "azimuth": 45, "elevation": 30, "distance": 2.2 },
          "focal_tracking": "flux_compression_zone"
        }
      }, null, 2)
    },

    biochem: {
      title: "ATP Synthase Proton-Motive Nano-Motor",
      icon: "🧬",
      tagTop: "Proton Gradient: ΔpH = 1.4 across Cristae",
      tagBottom: "Motor RPM: ~6,000 RPM (F0 Rotor)",
      simMode: "Molecular Dynamics Spatial Simulation",
      simGeo: "Membrane-bound F0 Rotor + F1 Catalytic Head",
      simFriction: "Understanding electrochemical potential converting to mechanical torque",
      pedagogy: [
        {
          heading: "Core Pedagogical Invariant",
          text: "Electrochemical proton gradient (H+) drives mechanical rotation of the c-ring subunit to synthesize ATP."
        },
        {
          heading: "Identified Cognitive Friction",
          text: "Textbooks show flat 2D cartoons that fail to explain how proton binding mechanically twists the gamma central stalk.",
          isFriction: true
        },
        {
          heading: "Physical Spatial Analogy",
          text: "A nanoscale hydroelectric turbine: protons rushing through half-channels acting like water turning a paddle wheel."
        }
      ],
      scriptEnglish: [
        { timing: "0:00 - 0:15", text: "Inside every mitochondrion spins the smallest mechanical rotary engine in the universe: ATP Synthase. It rotates at 6,000 RPM, powered entirely by an electrochemical dam of protons." },
        { timing: "0:15 - 0:30", text: "As protons drop through the inlet channel into the c-ring, they neutralize an essential aspartate residue, forcing the rotor to turn one notch. Watch the central gamma stalk twist inside the stationary catalytic head, squeezing ADP and phosphate into cellular fuel." }
      ],
      scriptHinglish: [
        { timing: "0:00 - 0:15", text: "Aapke har cell ke andar ek nano-motor ghoom raha hai—ATP Synthase! Ye 6,000 RPM ki speed par rotate karta hai, bilkul ek nanoscale dam turbine ki tarah." },
        { timing: "0:15 - 0:30", text: "Mitochondrial membrane ke bahar jama protons jab andar aane ke liye force karte hain, toh ye central shaft ghoomti hai. 3D me dekho kaise har 120 degree rotation par ADP aur phosphate judkar ATP banate hain." }
      ],
      spatialSpec: JSON.stringify({
        "scene_type": "macromolecular_motor_3d",
        "pdb_structure_id": "6B2Z_ATP_synthase",
        "subunits": {
          "F0_rotor": { "c_ring_monomers": 8, "rotation_speed_rpm": 6000, "axis": [0, 1, 0] },
          "central_stalk": { "gamma_subunit_asymmetry": true, "torque_coupling": "direct" },
          "F1_catalytic_head": { "hexamer_alpha3_beta3": true, "conformational_states": ["OPEN", "LOOSE", "TIGHT"] }
        },
        "particle_simulation": {
          "proton_gradient": { "reservoir": "intermembrane_space", "transfer_rate": "3_H+_per_ATP" }
        },
        "camera_rig": {
          "orbit_trajectory": { "cross_section_cutaway": true, "zoom_target": "catalytic_binding_pocket" }
        }
      }, null, 2)
    },

    neuro: {
      title: "Action Potential & Synaptic Vesicle Fusion",
      icon: "🧠",
      tagTop: "Depolarization Threshold: -55mV → +30mV",
      tagBottom: "SNARE Complex: Ca2+ Synaptotagmin Trigger",
      simMode: "Electrophysiological Membrane Dynamics",
      simGeo: "Axon Terminal + Presynaptic Active Zone + Vesicles",
      simFriction: "Visualizing the temporal cascade of voltage-gated ion gates vs chemical exocytosis",
      pedagogy: [
        {
          heading: "Core Pedagogical Invariant",
          text: "Electrical depolarization triggers voltage-gated Ca2+ influx, activating SNARE zippering for sub-millisecond neurotransmitter release."
        },
        {
          heading: "Identified Cognitive Friction",
          text: "Students conflate the electrical wave traveling down the axon with the chemical diffusion across the synaptic cleft.",
          isFriction: true
        },
        {
          heading: "Physical Spatial Analogy",
          text: "A biological zipper primed with a spring: calcium ions unlock the latch, snapping the vesicle and membrane together."
        }
      ],
      scriptEnglish: [
        { timing: "0:00 - 0:15", text: "When an electrical pulse hits the terminal of a neuron, electricity stops and physical molecular machinery takes over. The membrane depolarizes to +30 millivolts, triggering voltage-gated calcium gates to swing open." },
        { timing: "0:15 - 0:30", text: "Calcium rushes in like a trigger. It binds to synaptotagmin, which acts like a biological zipper, pulling the neurotransmitter vesicle down until it fuses with the presynaptic membrane, releasing dopamine in under one millisecond." }
      ],
      scriptHinglish: [
        { timing: "0:00 - 0:15", text: "Jab electrical signal neuron ke end tak pahunchta hai, toh aage electrical wire nahi hota—wahan chemical machinery kaam karti hai." },
        { timing: "0:15 - 0:30", text: "+30mV par Calcium gates khulte hain. Calcium aate hi SNARE proteins ek zip ki tarah tight ho jaate hain aur vesicle membrane ko kheench kar neurotransmitters release kar dete hain." }
      ],
      spatialSpec: JSON.stringify({
        "scene_type": "synaptic_transmission_3d",
        "membrane_dynamics": {
          "voltage_gated_Ca2+_channels": { "activation_threshold_mv": -20, "ion_flux_color": "#F472B6" },
          "bilayer_fluidity": { "phospholipid_head_shake": 0.05, "pore_formation_delay_ms": 0.8 }
        },
        "vesicular_docking": {
          "SNARE_complex": { "v_SNARE": "synaptobrevin", "t_SNARE": ["syntaxin-1", "SNAP-25"], "zippering_state": "FOUR_HELIX_BUNDLE" },
          "neurotransmitter_release": { "vesicle_diameter_nm": 40, "molecule_count_approx": 2000 }
        },
        "camera_rig": {
          "spatial_focus": "synaptic_cleft_20nm",
          "cinematic_slow_mo_factor": 1000
        }
      }, null, 2)
    },

    math: {
      title: "Multivariable Vector Fields & Gauss Divergence",
      icon: "📐",
      tagTop: "Flux: ∬ F • dS = ∭ (∇ • F) dV",
      tagBottom: "Divergence: ∇ • F = ∂P/∂x + ∂Q/∂y + ∂R/∂z",
      simMode: "Parametric Vector Field Dynamics",
      simGeo: "Closed 3D Gaussian Sphere with Surface Vector Normals",
      simFriction: "Translating symbolic multivariable integrals into physical 3D volumetric expansion",
      pedagogy: [
        {
          heading: "Core Pedagogical Invariant",
          text: "The total outward flux of a vector field across a closed surface equals the volume integral of divergence inside that surface."
        },
        {
          heading: "Identified Cognitive Friction",
          text: "Students solve double and triple integrals mechanically on paper without visualizing vector arrows piercing a 3D manifold.",
          isFriction: true
        },
        {
          heading: "Physical Spatial Analogy",
          text: "Pumping air inside an expanding balloon underwater: water displaced across the outer boundary matches the air created at the source."
        }
      ],
      scriptEnglish: [
        { timing: "0:00 - 0:15", text: "Gauss's Divergence Theorem connects a microscopic source to a macroscopic boundary. Instead of calculating a complex double integral over every patch of a 3D surface, you simply tally up what's being created inside." },
        { timing: "0:15 - 0:30", text: "In this 3D module, watch every vector arrow piercing our closed surface. Notice how the density of arrows exiting the manifold exactly equals the divergence accumulated throughout the interior volume." }
      ],
      scriptHinglish: [
        { timing: "0:00 - 0:15", text: "Gauss Divergence Theorem ka matlab simple hai: ek band 3D surface se bahar nikalne wala total flow, uske andar banne wale sources ke barabar hota hai." },
        { timing: "0:15 - 0:30", text: "Paper par double surface integral calculate karna mushkil lagta hai. 3D simulation me dekho kaise surface se bahar nikalne wale vector arrows ka count, volume ke andar ki divergence se perfectly match karta hai." }
      ],
      spatialSpec: JSON.stringify({
        "scene_type": "vector_calculus_3d",
        "manifold": {
          "geometry": "gaussian_sphere",
          "radius": 1.0,
          "surface_normals": { "display": true, "color": "#A78BFA", "scale": 0.3 }
        },
        "vector_field": {
          "formula": "F(x,y,z) = [2x, 2y, 2z]",
          "divergence_value": 6.0,
          "arrow_particles": { "count": 256, "dynamic_flow": "OUTWARD", "color_gradient": "velocity" }
        },
        "camera_rig": {
          "orbit_trajectory": { "interactive_cross_section_plane": true, "rotation_speed": 0.5 }
        }
      }, null, 2)
    }
  };

  var currentTopic = 'physics';
  var currentLang = 'english'; // 'english' or 'hinglish'

  function renderTopic(topicKey) {
    var data = topicData[topicKey];
    if (!data) return;

    // Viewport text
    var topicTitleEl = document.getElementById('viewportTopicTitle');
    if (topicTitleEl) topicTitleEl.textContent = data.title;

    var modelIconEl = document.getElementById('spatialModelIcon');
    if (modelIconEl) modelIconEl.textContent = data.icon;

    var tagTopEl = document.getElementById('dataTagTop');
    if (tagTopEl) tagTopEl.textContent = data.tagTop;

    var tagBottomEl = document.getElementById('dataTagBottom');
    if (tagBottomEl) tagBottomEl.textContent = data.tagBottom;

    var simModeEl = document.getElementById('simModeVal');
    if (simModeEl) simModeEl.textContent = data.simMode;

    var simGeoEl = document.getElementById('simGeoVal');
    if (simGeoEl) simGeoEl.textContent = data.simGeo;

    var simFrictionEl = document.getElementById('simFrictionVal');
    if (simFrictionEl) simFrictionEl.textContent = data.simFriction;

    // Pedagogy Panel
    var pedContentEl = document.getElementById('pedagogyContent');
    if (pedContentEl) {
      var pedHTML = '';
      data.pedagogy.forEach(function (item) {
        pedHTML += '<div class="pedagogy-item">';
        pedHTML += '<h5>' + item.heading + '</h5>';
        pedHTML += '<p>' + item.text + '</p>';
        if (item.isFriction) {
          pedHTML += '<span class="friction-tag">High Friction Cognitive Blocker</span>';
        }
        pedHTML += '</div>';
      });
      pedContentEl.innerHTML = pedHTML;
    }

    // Script Panel
    renderScript(data);

    // Spatial Spec Panel
    var spatialCodeEl = document.getElementById('spatialContent');
    if (spatialCodeEl) {
      spatialCodeEl.textContent = data.spatialSpec;
    }

    // Update status text
    var statusTextEl = document.getElementById('studioStatus');
    if (statusTextEl) {
      statusTextEl.textContent = 'Topic Ingested: ' + data.title + ' • 3D Spatial Specs Active';
    }
  }

  function renderScript(data) {
    var scriptContentEl = document.getElementById('scriptContent');
    if (!scriptContentEl) return;

    var scriptItems = currentLang === 'hinglish' ? data.scriptHinglish : data.scriptEnglish;
    var scriptHTML = '';
    scriptItems.forEach(function (block) {
      scriptHTML += '<div class="script-bubble">';
      scriptHTML += '<div class="script-timing">' + block.timing + '</div>';
      scriptHTML += '<div class="script-text">' + block.text + '</div>';
      scriptHTML += '</div>';
    });
    scriptContentEl.innerHTML = scriptHTML;
  }

  // Topic Buttons
  var topicButtons = document.querySelectorAll('.topic-btn');
  topicButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      topicButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      currentTopic = btn.getAttribute('data-topic');
      renderTopic(currentTopic);
    });
  });

  // Language Toggles
  var langEngBtn = document.getElementById('langToggle');
  var langHinglishBtn = document.getElementById('langBilingualToggle');

  if (langEngBtn && langHinglishBtn) {
    langEngBtn.addEventListener('click', function () {
      langEngBtn.classList.add('active');
      langHinglishBtn.classList.remove('active');
      currentLang = 'english';
      renderScript(topicData[currentTopic]);
    });

    langHinglishBtn.addEventListener('click', function () {
      langHinglishBtn.classList.add('active');
      langEngBtn.classList.remove('active');
      currentLang = 'hinglish';
      renderScript(topicData[currentTopic]);
    });
  }

  // Inspector Tabs
  var tabButtons = document.querySelectorAll('.tab-btn');
  var tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var tabKey = btn.getAttribute('data-tab');
      tabButtons.forEach(function (b) { b.classList.remove('active'); });
      tabPanels.forEach(function (p) { p.classList.remove('active'); });

      btn.classList.add('active');
      var targetPanel = document.getElementById('panel-' + tabKey);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });

  // Initial Render
  renderTopic('physics');

  // Fade-in animations
  var fadeEls = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window && fadeEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    fadeEls.forEach(function (el) { observer.observe(el); });
  } else {
    fadeEls.forEach(function (el) { el.classList.add('visible'); });
  }
})();
