(function () {
  'use strict';

  // Topic Dataset
  var topicData = {
    physics: {
      title: "Faraday-Lenz Dynamics & Electromagnetic Induction",
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
          "solenoid_mesh": { "coils": 14, "radius": 0.45, "wire_gauge": "copper_pbr" },
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
          "F0_rotor": { "c_ring_monomers": 10, "rotation_speed_rpm": 6000, "axis": [0, 1, 0] },
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

    // Viewport text & tags
    var topicTitleEl = document.getElementById('viewportTopicTitle');
    if (topicTitleEl) topicTitleEl.textContent = data.title;

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

    // Reset audio state on topic change
    stopAudioSimulation();
  }

  function renderScript(data) {
    var scriptContentEl = document.getElementById('scriptContent');
    if (!scriptContentEl) return;

    var scriptItems = currentLang === 'hinglish' ? data.scriptHinglish : data.scriptEnglish;
    var scriptHTML = '';
    scriptItems.forEach(function (block, idx) {
      scriptHTML += '<div class="script-bubble" data-block="' + idx + '">';
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

  // ==========================================
  // ElevenLabs Voice AI Waveform Widget Logic
  // ==========================================
  var audioPlayBtn = document.getElementById('audioPlayBtn');
  var audioWaveBars = document.getElementById('audioWaveBars');
  var audioTimerCurrent = document.getElementById('audioTimerCurrent');
  var scriptContent = document.getElementById('scriptContent');
  var isAudioPlaying = false;
  var audioInterval = null;
  var audioSeconds = 0;
  var audioTotalSeconds = 30;

  function toggleAudioSimulation() {
    if (isAudioPlaying) {
      stopAudioSimulation();
    } else {
      startAudioSimulation();
    }
  }

  function startAudioSimulation() {
    isAudioPlaying = true;
    if (audioPlayBtn) {
      var playIcon = audioPlayBtn.querySelector('.play-icon');
      var pauseIcon = audioPlayBtn.querySelector('.pause-icon');
      if (playIcon) playIcon.style.display = 'none';
      if (pauseIcon) pauseIcon.style.display = 'block';
    }
    if (audioWaveBars) {
      audioWaveBars.classList.add('playing');
    }
    if (scriptContent) {
      scriptContent.classList.add('audio-active');
    }

    // Play subtle synthesized audio tone via Web Audio API if permitted
    playSynthesizedVoiceTone();

    // Timer simulation
    audioInterval = setInterval(function () {
      audioSeconds++;
      if (audioSeconds > audioTotalSeconds) {
        stopAudioSimulation();
        return;
      }
      var mins = Math.floor(audioSeconds / 60);
      var secs = audioSeconds % 60;
      var timeStr = (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
      if (audioTimerCurrent) audioTimerCurrent.textContent = timeStr;
    }, 1000);
  }

  function stopAudioSimulation() {
    isAudioPlaying = false;
    clearInterval(audioInterval);
    audioSeconds = 0;
    if (audioPlayBtn) {
      var playIcon = audioPlayBtn.querySelector('.play-icon');
      var pauseIcon = audioPlayBtn.querySelector('.pause-icon');
      if (playIcon) playIcon.style.display = 'block';
      if (pauseIcon) pauseIcon.style.display = 'none';
    }
    if (audioWaveBars) {
      audioWaveBars.classList.remove('playing');
    }
    if (scriptContent) {
      scriptContent.classList.remove('audio-active');
    }
    if (audioTimerCurrent) audioTimerCurrent.textContent = '00:00';
  }

  function playSynthesizedVoiceTone() {
    try {
      var AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      var ctx = new AudioContext();
      if (ctx.state === 'suspended') ctx.resume();
      
      // Gentle harmonic chime
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    } catch (e) {
      // AudioContext blocked or not allowed by policy
    }
  }

  if (audioPlayBtn) {
    audioPlayBtn.addEventListener('click', toggleAudioSimulation);
  }

  // ==========================================
  // Interactive 3D Canvas Spatial Engine
  // ==========================================
  var canvas = document.getElementById('spatialCanvas');
  if (canvas) {
    var ctx = canvas.getContext('2d');
    var dpr = window.devicePixelRatio || 1;
    var width = 300;
    var height = 300;

    function resizeCanvas() {
      var rect = canvas.getBoundingClientRect();
      dpr = window.devicePixelRatio || 1;
      width = rect.width || 300;
      height = rect.height || 300;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 3D Orbit & Inertia State
    var rotX = 0.25;
    var rotY = 0.45;
    var velX = 0;
    var velY = 0;
    var isDragging = false;
    var lastMouseX = 0;
    var lastMouseY = 0;
    var fov = 320;

    // Mouse handlers
    canvas.addEventListener('mousedown', function (e) {
      isDragging = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      velX = 0;
      velY = 0;
    });

    window.addEventListener('mousemove', function (e) {
      if (!isDragging) return;
      var dx = e.clientX - lastMouseX;
      var dy = e.clientY - lastMouseY;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;

      velY = dx * 0.008;
      velX = -dy * 0.008;
      rotY += velY;
      rotX += velX;
    });

    window.addEventListener('mouseup', function () {
      isDragging = false;
    });

    // Touch handlers for mobile
    canvas.addEventListener('touchstart', function (e) {
      if (e.touches.length === 1) {
        isDragging = true;
        lastMouseX = e.touches[0].clientX;
        lastMouseY = e.touches[0].clientY;
        velX = 0;
        velY = 0;
      }
    }, { passive: true });

    window.addEventListener('touchmove', function (e) {
      if (!isDragging || e.touches.length !== 1) return;
      var dx = e.touches[0].clientX - lastMouseX;
      var dy = e.touches[0].clientY - lastMouseY;
      lastMouseX = e.touches[0].clientX;
      lastMouseY = e.touches[0].clientY;

      velY = dx * 0.008;
      velX = -dy * 0.008;
      rotY += velY;
      rotX += velX;
    }, { passive: true });

    window.addEventListener('touchend', function () {
      isDragging = false;
    });

    // 3D Point Projection Helper
    function project(x, y, z, cx, cy) {
      // Rotation around Y (Yaw)
      var cosY = Math.cos(rotY), sinY = Math.sin(rotY);
      var x1 = x * cosY + z * sinY;
      var z1 = -x * sinY + z * cosY;

      // Rotation around X (Pitch)
      var cosX = Math.cos(rotX), sinX = Math.sin(rotX);
      var y2 = y * cosX - z1 * sinX;
      var z2 = y * sinX + z1 * cosX;

      // Perspective scale
      var scale = fov / (fov + z2 + 180);
      return {
        x: cx + x1 * scale,
        y: cy + y2 * scale,
        z: z2,
        scale: scale
      };
    }

    var animTime = 0;

    // Simulation Renderers
    function renderPhysicsSimulation(cx, cy, t) {
      // 1. Helical Solenoid Coil Wire
      var turns = 12;
      var radius = 55;
      var heightStep = 7.5;
      var startY = -(turns * heightStep) / 2;

      ctx.beginPath();
      var firstPoint = true;
      for (var theta = 0; theta < turns * Math.PI * 2; theta += 0.15) {
        var x = radius * Math.cos(theta);
        var y = startY + (theta / (Math.PI * 2)) * heightStep;
        var z = radius * Math.sin(theta);
        var p = project(x, y, z, cx, cy);

        if (firstPoint) {
          ctx.moveTo(p.x, p.y);
          firstPoint = false;
        } else {
          ctx.lineTo(p.x, p.y);
        }
      }
      ctx.strokeStyle = '#06B6D4';
      ctx.lineWidth = 2.2;
      ctx.shadowColor = '#06B6D4';
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // 2. Oscillating Dipole Magnet Bar
      var magY = Math.sin(t * 2.2) * 45;
      var topPole = project(0, magY - 35, 0, cx, cy);
      var botPole = project(0, magY + 35, 0, cx, cy);

      // North Pole (Red/Magenta)
      ctx.beginPath();
      ctx.moveTo(topPole.x, topPole.y);
      var midPole = project(0, magY, 0, cx, cy);
      ctx.lineTo(midPole.x, midPole.y);
      ctx.strokeStyle = '#F43F5E';
      ctx.lineWidth = 8 * topPole.scale;
      ctx.lineCap = 'round';
      ctx.stroke();

      // South Pole (Cyan/Blue)
      ctx.beginPath();
      ctx.moveTo(midPole.x, midPole.y);
      ctx.lineTo(botPole.x, botPole.y);
      ctx.strokeStyle = '#38BDF8';
      ctx.lineWidth = 8 * botPole.scale;
      ctx.stroke();

      // 3. Magnetic Flux Looping Lines
      for (var f = 0; f < 6; f++) {
        var angle = f * (Math.PI / 3);
        ctx.beginPath();
        for (var u = 0; u <= Math.PI * 2; u += 0.25) {
          var lx = Math.cos(angle) * (radius * 1.5 * Math.sin(u));
          var ly = magY + Math.cos(u) * 65;
          var lz = Math.sin(angle) * (radius * 1.5 * Math.sin(u));
          var lp = project(lx, ly, lz, cx, cy);
          if (u === 0) ctx.moveTo(lp.x, lp.y);
          else ctx.lineTo(lp.x, lp.y);
        }
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.2)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Induced eddy particles
      for (var pIdx = 0; pIdx < 8; pIdx++) {
        var pTheta = t * 3 + pIdx * (Math.PI / 4);
        var px = radius * Math.cos(pTheta);
        var py = startY + 6 * heightStep;
        var pz = radius * Math.sin(pTheta);
        var pp = project(px, py, pz, cx, cy);

        ctx.beginPath();
        ctx.arc(pp.x, pp.y, 3 * pp.scale, 0, Math.PI * 2);
        ctx.fillStyle = '#FCD34D';
        ctx.shadowColor = '#FCD34D';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    function renderBiochemSimulation(cx, cy, t) {
      // ATP Synthase Rotor (c-ring cylinder)
      var ringRadius = 55;
      var rotorSpeed = t * 2.5;

      // c-ring sub-units (cylinders)
      var subunits = 10;
      for (var s = 0; s < subunits; s++) {
        var theta = rotorSpeed + s * ((Math.PI * 2) / subunits);
        var sx = ringRadius * Math.cos(theta);
        var sz = ringRadius * Math.sin(theta);

        var topP = project(sx, -30, sz, cx, cy);
        var botP = project(sx, 30, sz, cx, cy);

        ctx.beginPath();
        ctx.moveTo(topP.x, topP.y);
        ctx.lineTo(botP.x, botP.y);
        ctx.strokeStyle = '#10B981';
        ctx.lineWidth = 7 * topP.scale;
        ctx.lineCap = 'round';
        ctx.stroke();
      }

      // Central gamma stalk (twisting asymmetric shaft)
      var stalkTop = project(0, -60, 0, cx, cy);
      var stalkMid = project(Math.cos(rotorSpeed) * 12, 0, Math.sin(rotorSpeed) * 12, cx, cy);
      var stalkBot = project(0, 50, 0, cx, cy);

      ctx.beginPath();
      ctx.moveTo(stalkTop.x, stalkTop.y);
      ctx.lineTo(stalkMid.x, stalkMid.y);
      ctx.lineTo(stalkBot.x, stalkBot.y);
      ctx.strokeStyle = '#F59E0B';
      ctx.lineWidth = 6 * stalkMid.scale;
      ctx.shadowColor = '#F59E0B';
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // F1 Catalytic crown hexamer
      for (var h = 0; h < 6; h++) {
        var hAngle = h * (Math.PI / 3);
        var hx = 75 * Math.cos(hAngle);
        var hz = 75 * Math.sin(hAngle);
        var hp = project(hx, 45, hz, cx, cy);

        ctx.beginPath();
        ctx.arc(hp.x, hp.y, 10 * hp.scale, 0, Math.PI * 2);
        ctx.fillStyle = h % 2 === 0 ? 'rgba(56, 189, 248, 0.85)' : 'rgba(99, 102, 241, 0.85)';
        ctx.fill();
      }

      // Streaming Protons (H+) entering and exiting
      for (var p = 0; p < 18; p++) {
        var pProg = ((t * 1.5 + p / 18) % 1);
        var pY = -70 + pProg * 140;
        var pTheta = rotorSpeed + p * 0.8;
        var pX = (ringRadius + 8) * Math.cos(pTheta);
        var pZ = (ringRadius + 8) * Math.sin(pTheta);
        var pt = project(pX, pY, pZ, cx, cy);

        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 3 * pt.scale, 0, Math.PI * 2);
        ctx.fillStyle = '#34D399';
        ctx.shadowColor = '#34D399';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    function renderNeuroSimulation(cx, cy, t) {
      // 3D Axon Membrane Cylinder
      var rings = 10;
      var ringRadius = 45;
      var ringSpacing = 16;
      var startX = -((rings * ringSpacing) / 2);

      // Pulse wave position
      var waveCenter = Math.sin(t * 3) * (rings * ringSpacing * 0.4);

      for (var r = 0; r < rings; r++) {
        var rx = startX + r * ringSpacing;
        var distFromWave = Math.abs(rx - waveCenter);
        var isDepolarized = distFromWave < 24;

        ctx.beginPath();
        for (var a = 0; a <= Math.PI * 2; a += 0.3) {
          var ry = ringRadius * Math.cos(a);
          var rz = ringRadius * Math.sin(a);
          var rp = project(rx, ry, rz, cx, cy);

          if (a === 0) ctx.moveTo(rp.x, rp.y);
          else ctx.lineTo(rp.x, rp.y);
        }

        ctx.strokeStyle = isDepolarized ? '#F472B6' : '#38BDF8';
        ctx.lineWidth = isDepolarized ? 2.5 : 1.2;
        if (isDepolarized) {
          ctx.shadowColor = '#F472B6';
          ctx.shadowBlur = 12;
        }
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // Synaptic Terminal Vesicles (Spheres)
      for (var v = 0; v < 8; v++) {
        var vx = startX + rings * ringSpacing + Math.cos(v + t) * 14;
        var vy = Math.sin(v * 1.5 + t) * 20;
        var vz = Math.cos(v * 2.2 + t) * 20;
        var vp = project(vx, vy, vz, cx, cy);

        ctx.beginPath();
        ctx.arc(vp.x, vp.y, 6 * vp.scale, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(244, 114, 182, 0.75)';
        ctx.fill();
      }
    }

    function renderMathSimulation(cx, cy, t) {
      // Parametric Gaussian Sphere with radiating vector arrows
      var sphereRadius = 60;

      // Longitude rings
      for (var lng = 0; lng < 6; lng++) {
        var lngAngle = lng * (Math.PI / 6);
        ctx.beginPath();
        for (var lat = 0; lat <= Math.PI * 2; lat += 0.2) {
          var mx = sphereRadius * Math.cos(lat) * Math.cos(lngAngle);
          var my = sphereRadius * Math.sin(lat);
          var mz = sphereRadius * Math.cos(lat) * Math.sin(lngAngle);
          var mp = project(mx, my, mz, cx, cy);

          if (lat === 0) ctx.moveTo(mp.x, mp.y);
          else ctx.lineTo(mp.x, mp.y);
        }
        ctx.strokeStyle = 'rgba(167, 139, 250, 0.35)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Radiating vector normal arrows
      var arrowCount = 14;
      for (var k = 0; k < arrowCount; k++) {
        var uAngle = k * (Math.PI / 7) + t * 0.4;
        var vAngle = (k * 1.4) % Math.PI;

        var sx = sphereRadius * Math.sin(vAngle) * Math.cos(uAngle);
        var sy = sphereRadius * Math.cos(vAngle);
        var sz = sphereRadius * Math.sin(vAngle) * Math.sin(uAngle);

        var arrowLen = 25 + Math.sin(t * 4 + k) * 8;
        var ex = sx + (sx / sphereRadius) * arrowLen;
        var ey = sy + (sy / sphereRadius) * arrowLen;
        var ez = sz + (sz / sphereRadius) * arrowLen;

        var pStart = project(sx, sy, sz, cx, cy);
        var pEnd = project(ex, ey, ez, cx, cy);

        ctx.beginPath();
        ctx.moveTo(pStart.x, pStart.y);
        ctx.lineTo(pEnd.x, pEnd.y);
        ctx.strokeStyle = '#A78BFA';
        ctx.lineWidth = 1.8 * pEnd.scale;
        ctx.shadowColor = '#A78BFA';
        ctx.shadowBlur = 6;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Arrow head dot
        ctx.beginPath();
        ctx.arc(pEnd.x, pEnd.y, 2.5 * pEnd.scale, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
      }

      // Central divergence source node
      var centerNode = project(0, 0, 0, cx, cy);
      ctx.beginPath();
      ctx.arc(centerNode.x, centerNode.y, 7 * centerNode.scale, 0, Math.PI * 2);
      ctx.fillStyle = '#38BDF8';
      ctx.shadowColor = '#38BDF8';
      ctx.shadowBlur = 14;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    // Main 3D Animation Loop
    function animate(time) {
      animTime = time * 0.001;
      ctx.clearRect(0, 0, width, height);

      var cx = width / 2;
      var cy = height / 2;

      // Handle Inertia & Drift
      if (!isDragging) {
        rotY += velY;
        rotX += velX;
        velY *= 0.95;
        velX *= 0.95;
        rotY += 0.006; // Constant smooth ambient rotation
      }

      // Render based on active topic
      if (currentTopic === 'physics') {
        renderPhysicsSimulation(cx, cy, animTime);
      } else if (currentTopic === 'biochem') {
        renderBiochemSimulation(cx, cy, animTime);
      } else if (currentTopic === 'neuro') {
        renderNeuroSimulation(cx, cy, animTime);
      } else if (currentTopic === 'math') {
        renderMathSimulation(cx, cy, animTime);
      }

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }

  // ==========================================
  // Legal Trust Modals (Privacy & Terms)
  // ==========================================
  var linkPrivacy = document.getElementById('linkPrivacy');
  var linkTerms = document.getElementById('linkTerms');
  var modalPrivacy = document.getElementById('modalPrivacy');
  var modalTerms = document.getElementById('modalTerms');
  var closePrivacyModal = document.getElementById('closePrivacyModal');
  var closeTermsModal = document.getElementById('closeTermsModal');

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (linkPrivacy) {
    linkPrivacy.addEventListener('click', function (e) {
      e.preventDefault();
      openModal(modalPrivacy);
    });
  }

  if (linkTerms) {
    linkTerms.addEventListener('click', function (e) {
      e.preventDefault();
      openModal(modalTerms);
    });
  }

  if (closePrivacyModal) {
    closePrivacyModal.addEventListener('click', function () {
      closeModal(modalPrivacy);
    });
  }

  if (closeTermsModal) {
    closeTermsModal.addEventListener('click', function () {
      closeModal(modalTerms);
    });
  }

  // Close modals when clicking backdrop
  [modalPrivacy, modalTerms].forEach(function (modal) {
    if (modal) {
      modal.addEventListener('click', function (e) {
        if (e.target === modal) {
          closeModal(modal);
        }
      });
    }
  });

  // Close on Escape key
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeModal(modalPrivacy);
      closeModal(modalTerms);
    }
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
