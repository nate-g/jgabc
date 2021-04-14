(function () {

var module = {
    exports: null
};

module.exports = {
	'id': ['la', 'la_VA'],
	'leftmin': 1,
	'rightmin': 1,
	'patterns': {
		2 : "1b1c1d1f1g1h1j1k1l1m1n1p1r1s1t1v1x1z8́a1e1i1o1u1y1á1æ1é1ë1í1ï1ó1ú1ü1ý1œ1ǽ1",
		3 : "2b_2bb2bd2bh2bj2bm2bn2bp2bs2bt2cc2cd2cm2cn2cq2cs2ct2cz2d_2dc2dd2df2dg2dl2dm2dn2dp2dq2ds2f_2ff2fn2ft2g_2gd2gf2gg2gm2gs2h_2hp2ht2lb2lc2ld2lf2lg2lk2ll2lm2ln2lp2lq2lr2ls2mb2mc2md2mf2ml2mm2mn2mp2mr2ms2mt2n_2nb2nc2nf2ng2nh2nj2nl2nm2nn2np2nq2nr2ns2nt2nz2p_2pn2ps2pz2rb2rc2rd2rf2rg2rl2rm2rn2rp2rq2rs2rt2rz2sb2sc2sd2sf2sg2sl2sm2sn2sp2sq2sr2st2sv2tb2tc2td2tf2tg2tm2tn2tp2tq2ts2tt2x_2xq2xt2y_2z_2zz4c_4dv4l_4lt4lv4lz4m_4mq4nd4nv4pp4r_4rv4s_4ss4t_6mv_b2_c2_f2_g2_h2_j2_l2_m2_n2_p2_r2_s2_t2_x2_z2a2ua2ya5úb2lb2rc2hc4lc6rcu3d2re2ue3ye3úf2lf2rg2lg2ng2ro3yp2hp2lp2rr2ht2lt4rx2yy3ay3ey3iy3oy3uy3yy3æz2má2uá2yæ3aæ3eæ3iæ3oæ3uæ3áæ3éæ3íæ3óæ3úé2uí5aí5eí5ií5oí5uí5æœ́1ǽ3aǽ3eǽ3iǽ3oǽ3u",
		4 : "1qu42ax_2ch_2d3h2d3w2em_2es_2et_2ex_2nx22ox_2ph_2phn2php2pht2r1x2st_2th_2ui_2ux_2ys_2yx_3ne_4p3t4r3r_i2e_i2o_i2é_i2ó_i3i_i3í_i4a_i4u_i4á_i4ú_p4t_s2m_í3ia1e_a1isa1ísai2eai2oai2uai2éai2óbu3uch4lch4rd2æ_du3uei2aei2eei2uei2áei2éei2úei4oi5i_oi2aoi2eoi2ooi2uph2lph8rqu6ur2æ_t2h4u4lmui2uuo3uái2uéi2aéi2eéi2uéi4oói2aói2eói2oói2uú4lm",
		5 : "2i2x_2s3tn2sne_2st3p2th5m2th5n2th5p2th5s3p2tr3s2ce3s2ci3s2cy3s2cæ3s2cé3s2cí3s2cý3s2cœ3s2cǽ4ch3m4ch3n4ch3t_a2bf_a2bj_a2d3_co1e_co1i_de1í_de3u_di3u_di3ú_di3œ_dé1i_e2x3_gai4_hi2e_hi2é_i3bi_i3bo_i3bu_i3bí_i3bó_i3bú_i3co_i3có_i4n3_i5ul_i5úl_la4u_o2b3_præ1_ra2y_á2d3_é2x3_í4n3_ó2b3a3it_a3um_a3us_b3s2tcho3eci3etcu4lccu4lncu4lpcu4mbcu4nccu4ntcu4rscu4stcú4lccú4lncú4lpd2am_d4it_e2s3re3am_e3at_e3is_e3um_e3umde3umpe3unce3unde3unge3unte3unxe3us_g4ne_he3u_i1el_i3em_i3es_i3et_i3is_i3ud_i3um_i3ur_i3us_i5it_i5or_l3f2tlu1unlu1únn2s3fn2s3mnco3ingu2angu2engu2ingu2ungu2ángu2ængu2éngu2íngu2úngu6ongu6óo3um_ph3phqu6o_r4us_ri3e_s2t3ls2t3qs2t3ss2t3ts3se_s4t1kti1o_u3em_u3es_u3et_u3is_u3it_u5um_u5us_uo3usuo3úsx2it_x2um_x2us_á3it_á3um_á3us_é3am_é3at_é3is_é3um_é3unté3us_",
		6 : "1qui3a1qui3e1qui3o1qui3á1qui3æ1qui3é1qui3ó1qui3ǽ1qui5u1qui5ú2t1íps3p2neu3p2néu3p2sic3s4pec3s4pex3s4phr3s4phæ3s4phǽ3s4pic3s4pir3s4pol3s4pum3s4péc3s4péx3s4píc3s4pír3s4pól3s4púm_a2b1í_a2b3c_a2b3l_a2b3r_a2dfu_a3d4y_a3d4æ_a3d4ý_a3s2c_a3s2t_ad3si_ade3u_ader2_adi2a_adi2e_adi2o_adi2á_adi2é_anti1_ci2s3_co2n1_coi3u_cre3u_cu4ll_cu4mm_cu4sp_có2n1_cú4sp_de1in_de1it_de1ín_de4uc_de4ul_di2sj_ei5on_he3i__i6uli_i6úli_iai2u_iei2u_ini2e_ini2u_ini2é_ini2ú_inu2a_inu2e_inu2i_inu2o_inu2u_mai4u_ne3ut_né3ut_ob5st_po3et_pro3u_re1ie_re1in_re3ul_re3um_ree2x_su2b3_sú2b3_the2o_á2b3r_á3d4y_á3s2c_á3s2t_ádi2a_ádi2o_ádi2u_ób5sta1i2m_a2m3uiai6or_ci3entcui4úse2l3uee5ant_ei4us_i2oi2ui3ems_i3ens_i3ent_i3unt_nu3is_ob3s2cpha3elqu6um_r2i2m_rhe3usru3is_ru3it_ræ3s4psu3is_t2i2m_ui4us_ve6s5pvé6s5pxy4s3té5ant_éi4us_",
		7 : "2s3dem_2s3que_3s4parg3s4perg3s4pern3s4pers3s4plen3s4plén3s4pond3s4pons3s4párg3s4pérg3s4pérn3s4pérs3s4pónd3s4póns5s4trep5s4trom5s4trép_a2b1eo_a2b1er_a2b1ic_a2b1ig_a2b1ii_a2b1ir_a2b1it_a2b1iv_a2b1ol_a2b1om_a2b1or_a2b1ér_a2b1ól_a2b1ór_a2b3ru_a2b3us_a2b3ut_a2b3út_a3b3æq_a3d4ip_a3d4on_a3d4íp_a3d4ón_a3s4pu_a3s4pú_a4b3es_a4b3és_a4d5ul_a4d5æq_a4s3tr_a4sthm_ad3i2u_ad3i2ú_ad5is__ad5it__adi3en_adi3én_ado2b3_adsu3e_adó2b3_alte3r_alté3r_am2b3i_am2b3í_ante3u_co1i2e_co2e1n_co3e2r_co3n2a_co3n2e_co3n2i_co3n2o_co3n2u_co3n2á_co3n2é_co3n2í_co3n2ó_co3n2ú_coa2d3_coá2d3_có3n2i_de3es__de3s2c_de3s2q_de3s2t_de3s4p_di3i4u_di3i4ú_disi3c_disí3c_dé3s2t_dé3s4p_e2t3en_e3x4ed_e3x4od_e3x4éd_e3x4ód_ex3s4p_ex5s2t_ex5s4c_exo2b3_exó2b3_hu1i2u_hu1i2ú_hucu4s_i2d1eo_i2d1eó_i3n2an_i3n2it_i3n2án_i5n4ul_i5n4úl_i7uli__i7ulid_i7úli__i7úlid_in3s4p_in4d3u_in4d3ú_in5s2t_ina2cr_ina2df_ine2x3_ino2b3_inó2b3_lu3x2u_lu3x2ú_lu4x3q_o3b4el_o3b4il_o3b4ol_o3b4íl_ob3s2q_obi2ac_obi2ec_obi2ur_obi2ác_obi2éc_obi2úr_para1i_para1u_pe2r1a_pe2r1á_pe2r3h_pe2r3u_pe2r3ú_pe4r3j_posu3í_primi1_pro3in_præ3es_præi4a_præi4o_præi4u_præi4á_præi4ú_pulei4_puléi4_pé2r1a_pé2r3h_pé4r3j_pósu3i_re2d1h_re3ips_re3ite_re3s4p_repa2u_rhe4u__ré3s4p_sa3ul__su3s4p_sú3s4p_terp2s_the3ur_tra1ii_tri3en_uni3an_uni3án_va6s5p_vá6s5p_á2b1eo_á2b1er_á2b1ii_á2b1it_á2b3ig_á2b3lu_á3d4ip_á3s4pu_á4s3tr_álte3r_ám2b3i_é2t3en_é3x4ed_é3x4od_éx3s4p_éx5s2t_éx5s4c_í2d1eo_í5n4ul_ín3s4p_ín4d3u_ín5s2t_ó3b4el_ó3b4olai4unt_con5s4tcri6s5pcrí6s5pcón5s4tge3n2uahu2c5usi2u2s3li2u2s3vi2ú2s3li2ú2s3vlangú3elu3i2a_lú3i2a_ngu2i3ongu4em_ngu4es_ngu4et_ngu4is_ngu4it_ob4s3cuob4s3cúpo2t3enpo2t3erpo2t3espo2t3énpo2t3érpo2t3éspro3s4ppró3s4ppó2t3erti3n2uitru3um_tru3us_u2s3quex2u3it_x2ú3it_",
		8 : "5s4trang5s4trict5s4trigi5s4tring5s4troph5s4tráng5s4tríct5s4trígi5s4tríng_a2b1ali_a2b1auu_a2b1e3u_a2b1e3ú_a2b1i4u_a2b1i4ú_a2b1in1_a2b1ort_a2b1é3u_a2b3ier_a2b3iér_a2b3und_a2b3únd_a2d5s2t_a3b4rah_a3d4am__a3d4eps_a3d4ran_a3d4rán_a3d4u3a_a3d4u3á_a3d4urn_a4d3ole_a5s4tru_a5s4trú_ab4s3tu_ab4s3tú_ad3s2cr_alte4rc_alte4rn_alte4rp_alte4rt_alté4rc_alté4rn_alté4rp_alté4rt_am2b3ag_am2b3ax_am2b3ed_am2b3es_am2b3ur_am2b3us_am2b3ág_am2b3áx_am2b3éd_am2b3és_am2b3úr_am2b3ús_am3b4ic_am3b4id_am3b4if_am3b4il_am3b4íc_am3b4íl_ambi2ec_ambi2éc_ape3r2u_archi3e_be4th5l_bé4th5l_co2m3ed_co2m3it_co2m3éd_co2m3ít_co3e2x3_co3emen_co4n3ic_co4n3íc_coadi2u_coadi2ú_coex3s2_con3s4p_coádi2u_có2m3ed_có2m3it_cón3s4p_de4urio_de4urío_depe4r5_depé4r5_di2r1im_di2r1ím_di2s1i2_di2s1í2_di5s4cr_di5s4ta_di5s4tá_dia3s4p_dépe4r5_e3u3ax__e3x4orc_e3x4ost_e3x4óst_e3ú3ax__ele3usa_ele3usæ_eu3s2ty_eu3s2tý_i3n2ers_i3n2ert_i6n5ulc_i6n5ult_i6n5úlc_i6n5últ_i7ulis__i7úlis__in3s4cr_in4d3ep_in4d3ig_in4d3ép_in5d4is_in5d4u__in5d4ub_in5d4uc_in5d4ug_in5d4ul_in5d4up_in5d4ur_in5d4ux_in5d4úb_in5d4úc_in5d4úl_in5d4úr_in5d4úx_ina2b3r_inab3s2_inexs2t_inte2r3_inté2r3_ne2c1op_ne2c1óp_ne2g1ot_ne2g1ót_o3b4rim_o3b4ryz_o3b4rýz_o4b5ole_o4b5olé_pe1i6or_pe1i6ór_pe2r1cu_pe2r1el_pe2r1em_pe2r1od_pe2r1of_pe2r1ol_pe2r1op_pe2r1ém_pe2r3ea_pe2r3eg_pe2r3eo_pe2r3i1_pe2r3ib_pe2r3ie_pe2r3in_pe2r3ir_pe2r3ié_pe2r3ég_pe2r3í1_pe2r3íb_pe2r3íe_pe2r3ín_pe3r2a__pe3r2at_pe3r2át_pe3r4ia_pe3r4io_pe3r4it_pe3r4iá_pe3r4ul_pe3r4ít_pe3r4úl_pe4r1ed_pe4r3ec_pe4r3im_pe4r3or_pe4r3ím_pe4r3ór_pe5r4ip_perie3i_perié3i_períe3i_po2t3ue_po2t3ui_po2t3ué_po2t3uí_po2t3úe_po2t3úi_pos4t3h_pro2d1e_pro2d1é_pro3g2n_pro3i4e_pro3i4é_pro3s2c_pro5s2t_præ3a2u_præ3s2c_præ5s2t_præe2x1_præi4ec_præé2x1_pró2d1e_prǽ5s2t_pé2r3eo_pé2r3ii_pé4r3im_pó2t3ui_quo6d5l_re2d1ac_re2d1ad_re2d1am_re2d1an_re2d1ar_re2d1ea_re2d1eg_re2d1em_re2d1eo_re2d1eá_re2d1i__re2d1ib_re2d1ig_re2d1ii_re2d1im_re2d1in_re2d1ir_re2d1iv_re2d1ií_re2d1ol_re2d1op_re2d1ul_re2d1un_re2d1uv_re2d1ác_re2d1ád_re2d1ám_re2d1án_re2d1ár_re2d1ég_re2d1ém_re2d1íb_re2d1íi_re2d1ím_re2d1ín_re2d1ír_re2d1ív_re2d1ól_re2d1óp_re2d1úl_re2d1ún_re2d1úv_re2d5is_re2d5it_re2d5ít_re3d2ic_re3i2ec_re3s2cr_re3s2cu_re3s2cú_re5s2to_re5s4ta_re5s4tr_re5s4tá_ré2d1am_ré2d1ea_ré2d1eo_ré2d1ig_ré2d1ii_ré2d1im_ré2d1ol_ré2d5it_ré5s4tr_sa2t1ag_sa2t1ág_sati2s1_se2m3un_se2m3us_si2c1ut_sta3g2n_su3b4io_su3b4ió_su3b4ul_su3b4úl_su5s4cr_sub3s4p_subi4ac_subi4ec_subi4ug_subi4un_subi4ác_subi4éc_subi4úg_subi4ún_subne3u_subné3u_sí2c1ut_sú3b4io_sú3b4ul_súbi4ug_súbi4un_te2r1un_te2r1ún_the3s2t_thi3s2b_tra1i2a_tra1i2e_tran2s1_trán2s1_ve2l1ut_vipe3r4_vipé3r4_vípe3r4_á2b1e3u_á3b4rah_á3d4ran_á5s4tru_áb4s3tu_ám2b3ag_ám2b3ed_ám3b4id_ín4d3ig_ín5d4ur_ínte2r3_ó4b5oleab4s3tinab4s3tínlangu3i_langu4ealángu3i_me4t3ipsngui5us_pe2r3e3upe2r3e3úpe2r3é3upé2r3e3uáb4s3tin",
		9 : "_a2b1i2ec_a2b1i2éc_a3d4i3ab_a3d4i3áb_a3d4ramy_a5s4trat_a5s4trid_a5s4trát_a5s4tríd_a6s5plen_a6s5plén_a6s5purg_a6s5púrg_ab4s3ten_ab4s3tol_ab4s3tru_ab4s3trú_ab4s3tén_ab4s3tól_absu2b3l_absú2b3l_am2b3arv_am3b4ieg_am3b4ima_am3b4iso_am3b4isó_am3b4itr_am3b4iva_am3b4ix__am3b4iég_am3b4íma_ani2m3ad_anti3m2n_be2n1i4a_bou6s5tr_bé2n1i4a_circu4m1_circú4m1_co2m3es__co3e2lec_co3e2lig_co3g2nos_co3g2nós_co4n3i2u_co4n3i2ú_compe2r3_compo3t4_compé2r3_con3s2cr_có4n3i2u_cómpo3t4_cón3s2cr_de4uter__de4utera_de4uteri_de4utero_de4uteru_de4uterá_de4uteræ_de4uteró_de4utéri_di5s4ced_di5s4cen_di5s4cep_di5s4cer_di5s4ces_di5s4cid_di5s4cin_di5s4cip_di5s4cit_di5s4céd_di5s4cén_di5s4cép_di5s4cér_di5s4cés_di5s4cíd_di5s4cín_di5s4cíp_di5s4ert_di5s4tim_di5s4tin_di5s4tir_di5s4to__di5s4tím_di5s4tín_di5s4tír_di5s4ért_di6s5cre_di6s5cru_di6s5cré_dispe2r3_dispé2r3_dy6s5p6n_dí5s4cit_e2t3i3am_e2t3i3ám_e3x4eget_e3x4egét_epi5s4tr_epi5s4ty_epi5s4tý_eu3s2tom_eu3s2tóm_exam2b3i_exam2b3í_exám2b3i_in5d4ign_in5d4us__in5d4ígn_infra3s4_inobi6ur_inte3r4a_inte3r4á_lon2g1an_lon2g1án_o3b4russ_o3b4rúss_par3s4tr_pe2r1coq_pe2r1eff_pe2r1eru_pe2r1o2b_pe2r1u2a_pe2r1u2e_pe2r1u2i_pe2r1u2o_pe2r3eas_pe2r3es__pe2r3eám_pe2r3eát_pe2r3i4u_pe2r3i4ú_pe2r3reg_pe2r3s2c_pe2r3s2t_pe3r2am__pe3r2as__pe3r4ian_pe3r4icl_pe3r4icu_pe3r4ieb_pe3r4iem_pe3r4ien_pe3r4ier_pe3r4iet_pe3r4int_pe3r4iod_pe3r4iri_pe3r4iéb_pe3r4iém_pe3r4ién_pe3r4iér_pe3r4iét_pe3r4iód_pe3r4ícl_pe3r4ícu_pe3r4íer_pe3r4ínt_pe3r4íod_pe3r4íri_pe4r3att_pe4r3enn_pe4r3err_pe4r3átt_pe4r3énn_pe4r3érr_pe4r5it__pe5r4imi_pe5r4imu_pe5r4irr_pe5r4ími_pe5r4ímu_pe6r3egr_po3t4er__pos4t3ea_pos4t3er_pos4t3eá_pos4t3il_pos4t3ér_pos4t3íl_pro2d1ac_pro2d1ib_pro2d1ie_pro2d1ig_pro2d1ii_pro2d1ir_pro2d1iv_pro2d1ié_pro2d1ií_pro2d1ác_pro2d1íb_pro2d1íe_pro2d1íg_pro2d1íi_pro2d1ír_pro2d1ív_pro3d2e__pro3d2eb_pro3d2ec_pro3d2ef_pro3d2em_pro3d2en_pro3d2et_pro3d2éb_pro3d2ém_pro3d2én_pro3d2ét_prod3es__præte2r3_præté2r3_pró2d1ie_pró2d1ig_pró2d1ii_prǽte2r3_pseu2d3a_pæ2n3ins_pæ2n3íns_pé2r3eam_pé2r3eas_pé2r3eat_pé2r3i4u_pé2r3s2t_pé6r3egr_pós4t3ea_pós4t3er_quo2t1an_quo2t1án_quo2t3li_quó2t3li_re2d1a2u_re2d1e3u_re2d1e3ú_re2d1ien_re2d1ier_re2d1iér_re2d1ord_re2d1orn_re2d1á2u_re2d1íer_re2d1órd_re2d1órn_re3d2orm_re3d4amn_re3d4ari_re3d4ámn_re3d4ári_re4d3imi_re5s2tag_re5s2ter_re5s2tib_re5s2tic_re5s2til_re5s2tin_re5s2tip_re5s2tér_re5s2tíb_re5s2tíl_re5s2tín_re5s2típ_re5s4tit_re5s4tít_re6s5pub_re6s5púb_redin2d3_ré2d1e3u_ré2d1ien_ré5s4tit_se2d1iti_se2d1íti_se3s4cen_semi3s4p_si3s2ten_su3b4ia__su6s5pen_su6s5pén_sub5s4cr_subam2b3_supe2r1u_supe2r1æ_supe2r1ú_supe2r3h_sú3b4ia__te2r1i2u_theo3g2n_tra2n1ue_tran3s2u_tran3s2ú_transi2u_transi2ú_trán3s2u_ute2r3ui_á2d5s2tr_áb4s3tru_é2t3i3am_ínte3r4aab4s3tracab4s3tráclangu3eralangu3erilangu3erolangu3erálangu3isslangu3istlangu3érilangu3ísslangu3ístlangu4esclangu5it_lángu5it_",
		10 : "_a3d4amant_a4d5ipisc_a4d5ipísc_a6s5trum__ab4s3temi_ab4s3terg_ab4s3terr_ab4s3ters_ab4s3trah_ab4s3tras_ab4s3trax_ab4s3tráh_ab4s3trás_ab4s3tráx_ab4s3témi_ab4s3térg_ab4s3térr_ab4s3térs_alte4r3ut_alte4r3út_alté4r3ut_am2b3a2d3_am2b3á2d3_am3b4iani_am3b4iano_am3b4ianó_am3b4ibar_am3b4ibár_am3b4iori_am3b4iorí_am3b4isin_am3b4itex_am3b4itut_am3b4itéx_am3b4ivia_am3b4ivie_am3b4ivii_am3b4ivio_am3b4iviu_am3b4ivió_am3b4iáni_am3b4iáno_am3b4íori_am3b4ítut_am3b4ívia_am3b4ívie_am3b4ívii_am3b4ívio_am3b4íviu_ar2ch3ang_ar2ch3áng_circum5s4_circume3u_circume3ú_circumi2a_circumi2e_circumi2o_circumi2u_circumi2á_circumi2é_co4n3i2ac_co4n3i2ec_co4n3i2ex_co4n3i2ác_co4n3i2éc_co4n3i2éx_co5n4ium__compe3r4i_compe3r4u_compe3r4í_compe3r4ú_compé3r4i_conde3s4p_di3g2nosc_di5s4ciss_di5s4císs_di5s4till_di5s4trar_di5s4trat_di5s4trav_di5s4trár_di5s4trát_di5s4tráv_di5s4tíll_di6s5crim_di6s5cruc_di6s5crím_di6s5crúc_di6s5tine_di6s5tíne_in4d3ipis_in4d3ipís_in5d4utia_in5d4utii_in5d4utio_in5d4utiá_in5d4utiæ_in5d4utió_in5d4útia_in5d4útii_in5d4útiæ_in6d5ucul_in6d5úcul_incircu4m_inte3r4et_inte3r4io_inte3r4ió_inte3r4o__inte3r4ul_inte3r4ét_inte3r4úl_inte4r5ap_inte4r5áp_inter3s4p_inter5s4t_intran2s1_intro3i3e_intro3i3é_inté3r4io_inté3r4ul_intér5s4t_iu2s3i2ur_lecti5s4t_ob6s3trud_ob6s3trus_ob6s3trúd_ob6s3trús_pe2r1a2d1_pe2r1i2ac_pe2r1i2ec_pe3r4i3st_pe3r4i5un_pe3r4i5ún_pe3r4ileu_pe3r4iléu_pe3r4irer_pe3r4iret_pe3r4irér_pe3r4irét_pe3r4í3st_pe3r4írer_pe4r1e2x3_pe4r5iens_pe4r5iera_pe4r5itur_pe4r5itúr_pe4r5íera_pe4r5ítur_pe5r4imed_pe6r5imus_pe6r5ímus_po3t4ent__po3t4ere__po3t4ére__pos5t4erg_primi3s2c_pro2d1amb_pro2d1ámb_pro3d2ere_pro3d2eré_pro3d2ére_pro4s3tit_pro5s4tan_pro5s4tar_propte2r3_propté2r3_præin3s4t_præte3r4a_præte3r4á_præín3s4t_pró3d2ere_prǽte3r4a_pseudo3s4_pseudó3s4_pé2r3eant_pé4r5iens_pé4r5iera_quin2c3un_quo2t1enn_quo2t1énn_quo6n3iam_quó6n3iam_re5s4ta2u_re6s3ticu_retran2s1_retrán2s1_seme2t3ip_semiam2b3_ses2c1u4n_su3b4iis__su3b4ium__subte2r3h_supe2r1ac_supe2r1af_supe2r1ag_supe2r1al_supe2r1ap_supe2r1au_supe2r1ea_supe2r1eb_supe2r1ed_supe2r1ef_supe2r1eg_supe2r1el_supe2r1en_supe2r1eo_supe2r1eq_supe2r1er_supe2r1es_supe2r1ev_supe2r1eá_supe2r1ib_supe2r1ie_supe2r1il_supe2r1im_supe2r1ir_supe2r1iv_supe2r1ié_supe2r1oc_supe2r1op_supe2r1ác_supe2r1áf_supe2r1ág_supe2r1ál_supe2r1éa_supe2r1éd_supe2r1éf_supe2r1ég_supe2r1él_supe2r1én_supe2r1éq_supe2r1ér_supe2r1és_supe2r1év_supe2r1íb_supe2r1íe_supe2r1íl_supe2r1ím_supe2r1ír_supe2r1ív_supe2r1óc_supe2r1óp_supe2r3s4_supe2r5ii_supe2r5ií_supe2r5íi_supe3r2æ__supe4r3it_supe4r3ít_supra3s2c_supra3s4t_suprá3s4t_supé2r1ea_supé2r1ed_supé2r1eo_supé2r1er_supé2r1es_supé2r3s4_supé2r5ii_supé4r3it_sú3b4iis__sú3b4ium__súpe2r1es_súpe4r3it_tetra3e2t_tetra3g2n_tetra3s2t_tran3s2cr_tran3s2er_tran3s2il_tran3s2ér_tran3s2íl_trán3s2er_trán3s2il_áb4s3trah_ínte3r4et_ínte3r4o_langu3ere_langu3ére_su2b5s4tan",
		11 : "_a2d3a3s4cr_ab5s4tent__am3b4iatin_am3b4iatín_am3b4igene_am3b4igené_am3b4igéne_circumi2n3_circumo2b3_circumó2b3_circú4m5s4_compe3r4en_compe3r4er_compe3r4én_compe3r4ér_compe4r5ib_compe4r5ii_compe4r5ií_compe4r5íb_compe4r5íi_compo4t5en_compo4t5én_compé3r4er_compé4r5ii_cómpo4t5en_de5uteris__de5utéris__i2d1ipsum__i2d1ípsum__incon5s4tr_incón5s4tr_inpe2r3iur_inte3r4em__inte3r4ent_inte3r4er__inte3r4or__inte3r4ént_inte4r5amn_inte4r5anh_langu4ere__langu4eri__langu4ére__langu4éri__pe3r2arum__pe3r2árum__pe3r4i3s2c_pe3r4iremi_pe3r4irémi_pe3r4í3s2c_pe4r5iret__pe4r5itote_pe4r5itóte_pe5r4isseu_pe5r4isséu_pe5r6ierat_pe5r6íerat_po3t4éris__po4s4t3hac_pro2d1íte__pro2d1íto__pro3d2eamb_pro3d2eámb_pro6s5para_præpo2t3ue_præpo2t3ui_præpo2t3ué_præpo2t3uí_præpo2t3úe_præpo2t3úi_præpó2t3ui_præte3r4e__præte3r4eb_præte3r4em_præte3r4en_præte3r4et_præte3r4o__præte3r4éb_præte3r4ém_præte3r4én_præte3r4ét_præte4r5ac_præte4r5ag_præte4r5ác_præte4r5ág_prǽte3r4e__prǽte3r4en_prǽte3r4et_prǽte3r4o__pseudo4s5t_pseudó4s5t_pé5r6ierat_qua2m3o2b3_quattuo2r3_quoa2d3usq_quoa2d3úsq_quá2m3o2b3_reco2n3i2u_reco2n3i2ú_supe2r1amb_supe2r1arg_supe2r1asc_supe2r1asp_supe2r1att_supe2r1emi_supe2r1emo_supe2r1emí_supe2r1emó_supe2r1i2a_supe2r1i2u_supe2r1i2á_supe2r1i2ú_supe2r1iss_supe2r1ord_supe2r1ámb_supe2r1átt_supe2r1émi_supe2r1émo_supe2r1íss_supe2r1órd_supe2r3es__supe3r2ent_supe3r2er__supe3r2um__supe3r2us__supe3r2ént_superadi2u_superadi2ú_superco2m3_supercó2m3_superádi2u_súpe2r3es__súpe3r2ent_ta2m3etsi__ta2m3étsi__tran3s2enn_tran3s2énn_tran4s3ulm_trans1a2b1_trans1a2d1_trans1á2b1_trans1á2d1_u3n2i3uscu_ínte3r4em__ínte3r4ent_ínte3r4er__ínte3r4or_langu3imus_",
		12 : "_circumam2b3_circumám2b3_compe4r5ier_compe4r5iér_compe4r5íer_in5d4u5s4tr_in5d4ú5s4tr_inte2r1i2ac_inte2r1i2ec_inte2r1i2un_inte2r1i2ác_inte2r1i2éc_inte2r1i2ún_inte3r4ere__inte3r4ius__inte3r4ére__inté2r1i2ac_inté3r4ere__inté3r4ius__pe2r1a2b1i2_pe3r4iremur_pe3r4irémur_pe4r5iretis_pe4r5irétis_po3t4entur__po3t4éntur__pro2d1ímus__pro2d1ítis__pro2d1ítur__pro3d2éris__præpo3t4er__præpó3t4er__præpó3t4es__præte3r4ere_præte3r4eré_præte3r4or__præte3r4unt_præte3r4ére_præte3r4únt_præté3r4ere_prǽte3r4or__prǽte3r4unt_pseudoco2m1_que2m3a2d3m_que2m3á2d3m_supe2r1a2d3_supe2r1e2x1_supe2r1i2ec_supe2r1i2n3_supe2r1i2éc_supe2r1o2b3_supe2r1á2d3_supe2r1é2x1_supe2r1í2n3_supe2r1ó2b3_supe3r2ere__supe3r2ius__supe3r2ére__superadi2ec_superadi2éc_superde3s2tlangu3erunt_langu3érunt_",
		13 : "_am3b4igenus__am3b4ígenus__inte3r4emur__inte3r4emus__inte3r4émur__inte3r4émus__inte3r4éris__inte4r5aresc_inte4r5arésc_pe2r3tran2s1_pe2r3trán2s1_pe3r4irentur_pe3r4iréntur_præpo3t4ent__præpo3t4ere__præpo3t4ére__subte2r3s4tr_supe2r1a2b3l_supe2r1a2b3n_supe2r1a5s6t_supe2r1á2b3l_supe2r1á5s6t_supe3r2éris__superin5d2uc_superin5d2ux_superin5d2úc_superin5d2úx_superind3ui__supertran2s1_supertrán2s1_superínd3ui__tran4s3erer__trán4s3erer_",
		14 : "_circumam3b4ul_circumam3b4úl_circumám3b4ul_inte3r4emini__inte3r4émini__præpo3t4éris__præte3r4imur__præte3r4itor__præté3r4imur__præté3r4itor__supe3r2emini__supe3r2émini_",
		15 : "_præpo3t4entur__præpo3t4éntur__præte3r4imini__præte3r4ímini__supe2r1a2b3und_supe2r1a2b3únd_supe2r1i2n3i2e_supe2r1i2n3i2é_supe2r1i2n3s4t_supe2r1i2n4d1u_supe2r1i2n4d1ú_supe2r1í2n3s4t_supe2r1í2n4d1u_supe3r2a6s7ti__supe3r2á6s7ti__tran4s3eremur__tran4s3erémur_",
		16 : "_supe3r2a6s7tis__supe3r2á6s7tis__tran4s3eremini__tran4s3erentur__tran4s3erémini__tran4s3eréntur_"
	}
};
var h = new window['Hypher'](module.exports);

if (typeof module.exports.id === 'string') {
    module.exports.id = [module.exports.id];
}

for (var i = 0; i < module.exports.id.length; i += 1) {
  window['Hypher']['languages'][module.exports.id[i]] = h;
}
}());

