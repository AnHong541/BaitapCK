// Central site data and cart helpers
(function(window){
    const nameMap = {
        'Áo Thun Nam Cao Cấp': 'HG Aerial',
        'Váy Ngữ Đẹp': "HG Gaia's/Ortega's Rick Dom (GQ)",
        'Giày Thể Thao': 'RG Sazabi',
        'Túi Xách Da': 'HG Hashmal'
    };

    const demoProducts = [
        {
            name: 'HG Aerial',
            price: 500000,
            img: 'https://th-test-11.slatic.net/p/a8c4aac9b4576c3e8339e031d0cb16c1.jpg',
            oldPrice: 600000,
            gallery: [
                'https://th-test-11.slatic.net/p/a8c4aac9b4576c3e8339e031d0cb16c1.jpg',
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiTQ8b8BvotAfmhn4VpEM56shxjJesdof31DeOTQEZJLcrRq76e2osq92WmBnpSm5OjLo7yW57muAs3N3xH3sI4G6zVe3hY7UyKe08KECTvyo2ZDJZgCEPKtHSW7fexehqDqevtlouMbILyjT3LAc8e_M4ULuhkfaVgekpvUDeDsY8fOcT9k21YTgZlA/s1200/158_5174_s_xkwzv7fv8xy9fbg5qr22yyvy5r5k.jpg',
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiz-ABU7teb_PIoVYiS1myv7sQgNT7V-hB6oexzQw6LTOWZeHgDx_dwdP_UjvA0pQ7-QRrMej3ppuswqVCYrSLdRTKTJds6yLTf9VDg-4q-LrlPPk1YvrIzeCSsPXY1CC7kpncshX3cu5ocYtC3EIKTstSwz1blbrzbw1P7NIG6egdR_TFuDG_xjSsaKw/s1200/155_5174_s_qcuy8cxy6m0eeu0pz94mid2kvlw7.jpg'
            ]
        },
        {
            name: "HG Gaia's/Ortega's Rick Dom (GQ)",
            price: 700000,
            img: 'https://concagunpla.com/wp-content/uploads/2025/11/HGGQ-Rick-Dom-Artbox.webp',
            oldPrice: 800000,
            gallery: [
                'https://concagunpla.com/wp-content/uploads/2025/11/HGGQ-Rick-Dom-Artbox.webp',
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEge4pOdRLIkD28nHZZ52jAq_wTMfX9UDB_wOCQGchFNY6uuyFzpHZTCDzUkSqCYtkj5zHKBfl6z30QCqGcCuEC2IXEbLXdIfJ7csKyOaWwOO-tBr1P4TM7CoOvctaux03Gg45X__23_GXfFwba4aVpZsA8lsFU2Cbx2pJIeENWAuq1LRzzsgiCkxtuVrQ/s1200/hg%20gq%20rick%20dom%20(1).jpg',
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivwa03SYDtvvX6Zy0P8rY7ouI93kAFO7Z_NLrTuQXf_-qvyzT8vu3UkQAmlHTZt3eWcnjXuzdrFAaDC3NeXL6rJ3GIZYfLquVlNpcsalA2F-_VTR0_H4AygLHtgJpkhVsfuhyphenhyphenKMBvk949n6I3wPrBm583kL2OXYmdUyFPeHLS3Hm60NVWi0_yYcYJvDQ/s16000-rw/hg%20gq%20rick%20dom%20(4).jpg'
            ]
        },
        {
            name: 'RG Sazabi',
            price: 1200000,
            img: 'https://www.usagundamstore.com/cdn/shop/products/rg_1_144_sazabi_box_art.jpg?v=1654287661',
            oldPrice: null,
            gallery: [
                'https://www.usagundamstore.com/cdn/shop/products/rg_1_144_sazabi_box_art.jpg?v=1654287661',
                'https://www.usagundamstore.com/cdn/shop/products/153_2330_o_1ckburmmf171h1eo243l1043ie023_1100x.jpg?v=1655248376',
                'https://www.usagundamstore.com/cdn/shop/products/158_2330_o_1ckbuvpm0v8613l08034m31hoc2s_1100x.jpg?v=1655248138'
            ]
        },
        {
            name: 'HG Hashmal',
            price: 900000,
            img: 'https://bandai-hobby.net/images/158_1718_s_b3ogk0hnas45eb4ymqe3uyl7uumy.jpg',
            oldPrice: 1000000,
            gallery: [
                'https://bandai-hobby.net/images/158_1718_s_b3ogk0hnas45eb4ymqe3uyl7uumy.jpg',
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhcWgUH5LE8XqqaBNKI-3V3Nya7I7W9cmTHxJZO8njf6Hh4RmryzpEb3Um833I6kAWJUUHAw2kOsq8IMP0qax_TeG79XJS4c1xESDAQFFNlzr7VUBTRXymw-sNcn5ZTrivHKxsFjTjw_do/s16000-rw/large-mobile-suit-hg-ibo+%25281%2529.jpg',
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTyLUP31qmQRP5zRGGtGUQ6y5Cw0x2yoZp0t-QsachQGtxfiYgd5cM73MKPM6PZhkyueZMRRNJr-CCLKdiYju6fmHSneqmcM4Wepl-wu8zf6Z2cH1S-FIGBc3GzkB7mR5CcJfK4YJNv20/s1600-rw/hg-ibo-mobile-armor-hashmal-and-pluma+%25282%2529.jpg',
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPC1ULVGT94-UF-3dk5BjfhZQKCqW2gMLrfb5LK54zcU2h5wo-j9HJTepMT47uGq0qqtJPNjOF2y4CGLoL2kThOfTXtazvjpebultIhGaqdc69suwPFDIAmvZlFm7Pe9zkOwGazasuIHI/s16000-rw/large-mobile-suit-hg-ibo+%25282%2529.jpg'
            ]
        },
        {
            name: 'HG Psycho Gundam MK II',
            price: 2000000,
            img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh424wFnCa_f3P0BkKCPUfZbzcZNUk1R0oH2kIiojpMRWfPZXnplkRxu_5-vcPoPrt21rVBBiVQ_9TzVHVLBKvuD5eaGW_hVsYrWIIBoWM_aWh45uQD90Mq3Kw7gg716XeAawo0QAefT-l2_wKMpUee9ZcMJdtbAnvjfDZpOBV0efoUuS5aqS7cRxghbA/s16000/hguc%20psycho%20gundam%20mk-ii%20box%20art.jpeg',
            oldPrice: null,
            gallery: [
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh424wFnCa_f3P0BkKCPUfZbzcZNUk1R0oH2kIiojpMRWfPZXnplkRxu_5-vcPoPrt21rVBBiVQ_9TzVHVLBKvuD5eaGW_hVsYrWIIBoWM_aWh45uQD90Mq3Kw7gg716XeAawo0QAefT-l2_wKMpUee9ZcMJdtbAnvjfDZpOBV0efoUuS5aqS7cRxghbA/s16000/hguc%20psycho%20gundam%20mk-ii%20box%20art.jpeg',
                'https://gun-pla-world.com/wp-content/uploads/2025/04/image-49.png',
                'https://gun-pla-world.com/wp-content/uploads/2025/04/image-51.png',
                'https://gun-pla-world.com/wp-content/uploads/2025/04/image-53.png',
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnFD-MIyiSmvN9NmlfIdjHapGrXVIjlRNEJzyyXOldPxntVvIwJ2oZNSntPtHtLX2e3d6AdlNDNhvtFJNc01XnbEX6jH6nHkiY8i3xU6zbGJWAijxH391i3AyGkb-ipP0QlXJpaMMKf8Wp3tzLH8IgSKGMQoCCZRUF3FAV2A9ZD_XeWaqI5dcQIjfr9Q/s16000-rw/hguc%20psycho%20gundam%20mk-ii%20(3).jpg'
            ]
        },
        {
            name: 'MG Wing Zero Gundam EW ver.ka',
            price: 1400000,
            img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhrTP3ACZuuPY5aVbP0ZVDiKPrXR4nlkdy1W1WG4lE0i1xGvEtCvtp29I4ZAJvUi0gCeuJ4NrdwKo9BesSGqBb9JyFD-rCTY7vgTZ5J4CApO4zkERXcSK8ekNEUFlP1YRrPmrE6_TSNkR_J/s16000-rw/mg-wing-gundam-zero-ew-ver-ka-box-art.jpg',
            oldPrice: null,
            gallery: [
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhrTP3ACZuuPY5aVbP0ZVDiKPrXR4nlkdy1W1WG4lE0i1xGvEtCvtp29I4ZAJvUi0gCeuJ4NrdwKo9BesSGqBb9JyFD-rCTY7vgTZ5J4CApO4zkERXcSK8ekNEUFlP1YRrPmrE6_TSNkR_J/s16000-rw/mg-wing-gundam-zero-ew-ver-ka-box-art.jpg',
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgD6qZ-6sRcTBKo-GDZ5hxKikAxjLmSwOs7uLfXbEsPo44DwHFWO-4sXeVXNEMV-FhdWC-mIFZkIqiy49_WEWwGJ1EtRxIpkEFYeI2rWVRSuHOhaVtSeRwMpy9_HW8BNZiGjfNNvx7yNmiL/s16000-rw/mg-wing-gundam-zero-ew-ver-ka+%25283%2529.jpg',
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKmzbfZSltI7S7nGOI1D9gnqnEr8sUpQKsNgFP-AlEt9QzJ3SpKWmHL7_DpaUbzjzInJtlXDASJiM5Liq-g1BfwtV-yY4jd0ZqgPTvnjo1lgsgTTAa3tos7W3t9VPIELovrlCVj3_zvo3c/s16000-rw/mg-wing-gundam-zero-ew-ver-ka+%252810%2529.jpg',
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEid2d-Y2nHOOrFKOyp0iRosRTDIw9NUPNFCaRVDIr-dPy8Z4KTwhO9MpCqGCGzr5dpnvjHikwen9iUowCbtEJQMPXCcPJ-yZ9XnKO1KKGPCHknlKyhOo26OwEcmIcqL0OhdT6QuEiRnBOWE/s16000-rw/mg-wing-gundam-zero-ew-ver-ka+%25286%2529.jpg'
            ]
        },
        {
            name: 'RG Nu Gundam',
            price: 1000000,
            img: 'https://www.hlj.com/productimages/ban/banh578426-up_0.png',
            oldPrice: null,
            gallery: [
                'https://www.hlj.com/productimages/ban/banh578426-up_0.png',
                'https://www.hlj.com/productimages/ban/banh578426-up_1.png',
                'https://www.hlj.com/productimages/ban/banh578426-up_2.png'
            ]
        },
        {
            name: 'RG Hi-nu Gundam',
            price: 1300000,
            img: 'https://www.hlj.com/productimages/ban/bans61915_0.png',
            oldPrice: null,
            gallery: [
                'https://www.hlj.com/productimages/ban/bans61915_0.png',
                'https://www.hlj.com/productimages/ban/bans61915_1.jpg',
                'https://www.hlj.com/productimages/ban/bans61915_3.png'
            ]        },
        {
            name: 'RG Astray red dragon (Pre-order)',
            price: 1500000,
            img: 'https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/590662278_1397961529005623_3756809110578993540_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Bkk8Bnv3f_gQ7kNvwFm0V0D&_nc_oc=AdlI9Tr6EmW8RwxGWI8oMIHmO0s2oUqGIIDPpRsDIIHmSfw1aFS8F4RzmAVwkN2L9ElrJ7qj4ajsmv_K4iEQD4WH&_nc_zt=23&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=tUjsWiuHOR_8QAxRKX7jyg&oh=00_AfmH7oyG4QJRSuuiA2H1kewCeuX_RHIdAExQzMTupxwB2w&oe=69429B6F',
            oldPrice: null,
            gallery: [
                'https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/590662278_1397961529005623_3756809110578993540_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Bkk8Bnv3f_gQ7kNvwFm0V0D&_nc_oc=AdlI9Tr6EmW8RwxGWI8oMIHmO0s2oUqGIIDPpRsDIIHmSfw1aFS8F4RzmAVwkN2L9ElrJ7qj4ajsmv_K4iEQD4WH&_nc_zt=23&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=tUjsWiuHOR_8QAxRKX7jyg&oh=00_AfmH7oyG4QJRSuuiA2H1kewCeuX_RHIdAExQzMTupxwB2w&oe=69429B6F',
                'https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/589248634_1397961805672262_7303041491995249804_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Pq_53r8bSEsQ7kNvwGkiTik&_nc_oc=AdmpQ3GvspgYcoWPYiv9gwxi348VsQ2yNiMXFaI2zyTCiq1vM8HX_86uSbUDYOkJLFiCB6ppgk6bdS01nusFAm_3&_nc_zt=23&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=_eMix-0dKJ5DgrmhcULZqw&oh=00_AfkEdMG9KlyGjSy3nJL0lFqQS8_E3tKgd2efZye71WJWTQ&oe=6942BEB6',
                'https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/588309964_1397961939005582_7024710379189118462_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=RGvWheaQ_q8Q7kNvwGFr7GG&_nc_oc=AdkEIuwiVhT8OGmkRzbZxi1MUnXGdxJPYRo0ACIl3aQbOxMKUJlOost4lbxpgj9sVQOCrpoE7dXcty6xSlOf3Vyo&_nc_zt=23&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=-t2B78nOTBihFPzwagaymA&oh=00_AfkX3iYk3GsKrcLK_vuLfX14Rif3iEt16jV5p2pB_S_gWw&oe=6942AC40',
                'https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/588218013_1397961982338911_8879698074929244989_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ntBWuZNO0KwQ7kNvwHOj5D5&_nc_oc=AdlUQE48c-Iwt1jOwc_bp4a-JCg6FEKxw2ozLuNEfEw06PDX8GZ4OqJEoL0gt8_723T6uHYDv1ujCxXd0L_Oq7o1&_nc_zt=23&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=WYDTCJIO0CnpexnT1VCogg&oh=00_AfkKDmklgNAsTau9yGzzXzbsmfmRvnF40ik4_-5szycfow&oe=6942A859'
            ]
        },
        {
            name: 'HG Zagan (Pre-order)',
            price: 780000,
            img: 'https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/592381983_1253166983496927_7932213611015691988_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TbOQl46H_CMQ7kNvwFDLoK0&_nc_oc=Admu5V-kbzhq2iE59Lb0PzSW0x-hbmr1ldHr07VBfqAlp1kinAprU7k_JWKNTkw_iPOD8H28DWuuPnX6TOGnKYd1&_nc_zt=23&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=XaBKKjvCINSSy_rZYwzU4w&oh=00_AfmSWABtMtyQGlrg8tjlwWH3AX78IeYf9vF4oHZkfezPTA&oe=6942A7B2',
            oldPrice: null,
            gallery: [
                'https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/592381983_1253166983496927_7932213611015691988_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TbOQl46H_CMQ7kNvwFDLoK0&_nc_oc=Admu5V-kbzhq2iE59Lb0PzSW0x-hbmr1ldHr07VBfqAlp1kinAprU7k_JWKNTkw_iPOD8H28DWuuPnX6TOGnKYd1&_nc_zt=23&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=XaBKKjvCINSSy_rZYwzU4w&oh=00_AfmSWABtMtyQGlrg8tjlwWH3AX78IeYf9vF4oHZkfezPTA&oe=6942A7B2',
                'https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/591647869_1254075036739455_8353199592321068113_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8--KIPFrvPUQ7kNvwHKqlRR&_nc_oc=AdmUBBC2Y0aVLXXyTt0SYlDwx9tKjbpWbLgiacxME6mOPz63CjHan0FR6dcmctrqTLCiAItagpZ5QZmxaiBAAOEi&_nc_zt=23&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=AYuSp-v8xxxnliXmojoOAQ&oh=00_AfkgswINJFJmaKm8eQV8uQVmQOfXuqCcoutSrhvbfdNEZw&oe=6942AFFB',
                'https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/591242516_1254075070072785_3511852807545857102_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1TivgOkiht0Q7kNvwEGUe8v&_nc_oc=AdkIS0eej7poZZ6nrPcfbiz5MNzzgI-_4jek4TGcy4ydSN6kb_yD-RjjhrH-li7F-t6zh77ijUAp882xipia_J3k&_nc_zt=23&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=GlLqpKmelQDZff93V8igXQ&oh=00_AfnD7JbXH3lpdajp6RAXTf3x1ezUxuTDn-HPkz9UdM4ABQ&oe=6942ABAE'
            ]
        },
        {
            name: 'HG White Gundam (Pre-order)',
            price: 650000,
            img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiAp6bG5-lMYzQY0-8Um-l_df0Wcx_bjLwTspADgNe-9LvWGgQGOp-TSSzIyIJ4YGZTsOVlzwK5cCE_qNC1kGtSKWhokeYOSTVByJ19cSApWNS1rVSOf_UXhlmv42Zv7wRtJ8Cwc34L6ckn5EQ75HGRoWOJe2xCq934S1Rz1Kh_df1u0oai26_j-rUt-Q/s16000-rw/hg%20white%20gundam%20box%20art.jpg',
            oldPrice: null,
            gallery: [
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiAp6bG5-lMYzQY0-8Um-l_df0Wcx_bjLwTspADgNe-9LvWGgQGOp-TSSzIyIJ4YGZTsOVlzwK5cCE_qNC1kGtSKWhokeYOSTVByJ19cSApWNS1rVSOf_UXhlmv42Zv7wRtJ8Cwc34L6ckn5EQ75HGRoWOJe2xCq934S1Rz1Kh_df1u0oai26_j-rUt-Q/s16000-rw/hg%20white%20gundam%20box%20art.jpg',
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgdLneS5Q5qkWD-5NfuA-m3jxtWTdFMfqXRQNIQnymumi8soWXNo5-ZPvyhK_se2fRpMgJO2vhxHvPJOxF_AbgglL07g-Xj9cTNVGR1WKEV7PZJCPpVf1elVsKXnu1OPXKFyRhRhp5mCHHmCt5uAuJbG1Ixza8Db97jxoHJLn_mYE45dDSFx68IoOBPxQ/s16000-rw/hg%20white%20gundam%20GQ%20(3).jpg',
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeQBIL9z94C89nZScmjJXfmiw7o7Myw32af9fgZHzJauvoQqeEKKkk35fvp_UqiiMQqfA_SY5P35L0tqFx0FdalmEARsUG6e85TvLr7smmB7DseBs-rww0qxxMiYdBR6e64VwMsiTpirJtnT9oF0tsKXstaQsBJt0ru31z_09B2vY7L_e5HlkopiSuqg/s16000-rw/hg%20white%20gundam%20GQ%20(1).jpg'
            ]
        },
        {
            name: 'MG Barbatos Lupus (Pre-order)',
            price: 1700000,
            img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhM6dxBSs0TsE7ZC-SeLnD35H5cpB8GHXPjKkUHzrj2Otm18Oz5AEn52ikaear5mG8L2uU6AUZtTJkP-jg4LCfYtRdhjySARqInB0uCJbJMBEgrZEGXPuSGP0pekxikfKQZeEFPEOK11emiIGT2b5Lqrf-AdEai05hQmquulxns7VtI2OP9myapAn5psA/s16000-rw/mg%20barbatos%20lupus%20rex%20box%20art.jpg',
            oldPrice: null,
            gallery: [
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhM6dxBSs0TsE7ZC-SeLnD35H5cpB8GHXPjKkUHzrj2Otm18Oz5AEn52ikaear5mG8L2uU6AUZtTJkP-jg4LCfYtRdhjySARqInB0uCJbJMBEgrZEGXPuSGP0pekxikfKQZeEFPEOK11emiIGT2b5Lqrf-AdEai05hQmquulxns7VtI2OP9myapAn5psA/s16000-rw/mg%20barbatos%20lupus%20rex%20box%20art.jpg',
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNkq-QjynDtYvDGLdoEGiGtKF9QExXqnng3X4IrD10MLoPiTX26Q3AVQKBr9JcuMw9ByYk4Li_I8Wi7vDcfMZZYpEwZmWtXVdbruYRgjNq7LE_7Y_jwueuKS0coYdVPDBBN0lmw_1zBm3bgCTGr2BMiDDWWTluLRqS_fgTqhYoHntNeyO13SubUEor9w/s16000-rw/MG%20gundam%20barbatos%20lupus.jpg',
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8i0DS3PHhjN5Sv1EiWiYD8yD0Q6QsBExW5gSCGY3Dnnv-25o8-yY43M6mdv5I9ub_xWu3iIB5P1CQrADv2QIfFl9cpOAgy9wMjCSefcKICkDRVUcZLuJmowZQFRiF9wO227bTOhcB0iij_53lzOAJcUfVp-hMhYKQ0sPKnXPZ986ml3V17SGkHq6tAg/s16000-rw/mg%20gundam%20barbatos%20lupus%20(2).jpg'
            ]
        },
    ];

    function getCart() {
        try { return JSON.parse(localStorage.getItem('cartItems') || '[]'); } catch(e) { return []; }
    }
    function setCart(cart) {
        localStorage.setItem('cartItems', JSON.stringify(cart));
    }
    function recalcCartCount() {
        const cart = getCart();
        const count = cart.reduce((s, it) => s + (it.qty || it.quantity || 1), 0);
        localStorage.setItem('cartCount', count);
        const el = document.querySelector('.cart-icon');
        if (el) el.setAttribute('data-count', count);
        return count;
    }

    function migrateOldCartNames() {
        try {
            const cart = getCart();
            let changed = false;
            cart.forEach(it => {
                if (it && it.name && nameMap[it.name]) { it.name = nameMap[it.name]; changed = true; }
            });
            if (changed) { setCart(cart); recalcCartCount(); }
        } catch (e) { console.warn('migrateOldCartNames failed', e); }
    }

    function addToCart(product, qty) {
        if (!product) return;
        const cart = getCart();
        const q = Math.max(1, parseInt(qty || 1));
        let found = cart.find(it => it.name === product.name);
        if (found) {
            found.qty = (found.qty || found.quantity || 0) + q;
            found.quantity = found.qty;
        } else {
            cart.push({ name: product.name, price: product.price, img: product.img, oldPrice: product.oldPrice, qty: q, quantity: q });
        }
        setCart(cart);
        const count = recalcCartCount();
        return count;
    }

    // Expose
    window.SITE = window.SITE || {};
    window.SITE.demoProducts = demoProducts;
    window.SITE.nameMap = nameMap;
    window.SITE.getCart = getCart;
    window.SITE.setCart = setCart;
    window.SITE.recalcCartCount = recalcCartCount;
    window.SITE.addToCart = addToCart;
    window.SITE.migrateOldCartNames = migrateOldCartNames;

    // run migration on load
    document.addEventListener('DOMContentLoaded', function(){ migrateOldCartNames(); });

    // --- Simple client-side auth UI (simulated) ---
    function getUser() {
        try { return JSON.parse(localStorage.getItem('siteUser') || 'null'); } catch(e){ return null; }
    }
    function setUser(u) { localStorage.setItem('siteUser', JSON.stringify(u)); }
    function clearUser() { localStorage.removeItem('siteUser'); }

    function renderAuthUI() {
        var user = getUser();
        var authIcon = document.querySelector('.auth-icon');
        var authPopup = document.querySelector('.auth-popup');
        if (!authIcon || !authPopup) return;
        if (user) {
            // show initials or first letter
            var initials = (user.name || '').split(' ').map(s=>s[0]||'').join('').slice(0,2).toUpperCase();
            authIcon.textContent = initials || 'U';
            authPopup.innerHTML = `<div class="auth-name">${user.name} · ${user.provider}</div>
                <button class="auth-logout">Log out</button>`;
            authPopup.querySelector('.auth-logout').addEventListener('click', function(){ clearUser(); renderAuthUI(); authPopup.style.display='none'; });
        } else {
            authIcon.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="3" stroke="#fff" stroke-width="1.5"/><path d="M4 20c0-3.3137 2.6863-6 6-6h4c3.3137 0 6 2.6863 6 6" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
            authPopup.innerHTML = `<button class="auth-google">Login with Google</button>
                <button class="auth-facebook">Login with Facebook</button>`;
            // handlers
            authPopup.querySelector('.auth-google').addEventListener('click', function(){
                var name = prompt('Nhập tên hiển thị cho Google:','Guest');
                if (name) { setUser({ provider:'Google', name: name }); renderAuthUI(); authPopup.style.display='none'; }
            });
            authPopup.querySelector('.auth-facebook').addEventListener('click', function(){
                var name = prompt('Nhập tên hiển thị cho Facebook:','Guest');
                if (name) { setUser({ provider:'Facebook', name: name }); renderAuthUI(); authPopup.style.display='none'; }
            });
        }
    }

    document.addEventListener('DOMContentLoaded', function(){
        // attach click to auth icon to toggle popup
        var authWrap = document.querySelector('.auth-wrap');
        if (authWrap) {
            var icon = authWrap.querySelector('.auth-icon');
            var popup = authWrap.querySelector('.auth-popup');
            if (icon && popup) {
                icon.addEventListener('click', function(e){
                    e.stopPropagation();
                    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
                });
                // click outside closes
                document.addEventListener('click', function(){ if (popup) popup.style.display='none'; });
                popup.addEventListener('click', function(e){ e.stopPropagation(); });
            }
            renderAuthUI();
        }
    });

    // --- Currency & language helpers ---
    window.SITE.currency = localStorage.getItem('siteCurrency') || 'VND';
    window.SITE.exchangeRate = parseFloat(localStorage.getItem('exchangeRate')) || 26300;

    window.SITE.formatVND = function(n){
        if (n == null) return '';
        return n.toLocaleString('vi-VN') + ' đ';
    };
    window.SITE.formatUSD = function(n){
        if (n == null) return '';
        return (n / window.SITE.exchangeRate).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    window.SITE.convertAllPrices = function(targetLang){
        var els = document.querySelectorAll('[data-price], .price, .product-price, .cart-price');
        els.forEach(function(el){
            var base = el.getAttribute('data-base-vnd');
            if (!base){
                var txt = (el.textContent || '').replace(/\s/g,'');
                var m = txt.replace(/\./g,'').match(/(\d{1,})/);
                if (m) base = parseInt(m[1],10);
            } else base = parseFloat(base);

            if (!base || isNaN(base)) return;
            el.setAttribute('data-base-vnd', base);

            if (targetLang === 'en'){
                el.textContent = window.SITE.formatUSD(base);
            } else {
                el.textContent = window.SITE.formatVND(base);
            }
        });
    };

    window.SITE.setCurrencyByLang = function(lang){
        if (lang === 'en'){ window.SITE.currency = 'USD'; localStorage.setItem('siteCurrency','USD'); }
        else { window.SITE.currency = 'VND'; localStorage.setItem('siteCurrency','VND'); }
        window.SITE.convertAllPrices(lang === 'en' ? 'en' : 'vi');
    };

    window.SITE.fetchExchangeRate = function(){
        return fetch('https://api.exchangerate.host/latest?base=USD&symbols=VND')
            .then(function(res){ return res.json(); })
            .then(function(json){
                if (json && json.rates && json.rates.VND){
                    var rate = parseFloat(json.rates.VND);
                    if (rate && !isNaN(rate)){
                        window.SITE.exchangeRate = rate;
                        localStorage.setItem('exchangeRate', rate);
                        return rate;
                    }
                }
                throw new Error('Invalid rate');
            });
    };

    // Initialize currency display on load (optionally auto-fetch rate)
    document.addEventListener('DOMContentLoaded', function(){
        try{
            var lang = localStorage.getItem('language') || 'vi';
            var auto = localStorage.getItem('autoFetchRate') === '1';
            if (auto){
                window.SITE.fetchExchangeRate().catch(function(e){ console.warn('fetchExchangeRate failed', e); });
            }
            window.SITE.setCurrencyByLang(lang === 'en' ? 'en' : 'vi');
        }catch(e){ console.warn('currency init failed', e); }
    });

    // Carousel Navigation
    document.addEventListener('DOMContentLoaded', function() {
        let currentSlide = 0;
        const slides = document.querySelectorAll('.hero-slide');
        const indicators = document.querySelectorAll('.indicator');
        const totalSlides = slides.length;

        function showSlide(index) {
            // Remove active class from all slides and indicators
            slides.forEach(function(slide) { slide.classList.remove('active'); });
            indicators.forEach(function(indicator) { indicator.classList.remove('active'); });

            // Add active class to current slide and indicator
            slides[index].classList.add('active');
            indicators[index].classList.add('active');
            currentSlide = index;
        }

        function nextSlide() {
            showSlide((currentSlide + 1) % totalSlides);
        }

        function prevSlide() {
            showSlide((currentSlide - 1 + totalSlides) % totalSlides);
        }

        // Navigation button event listeners
        const nextBtn = document.getElementById('heroNext');
        const prevBtn = document.getElementById('heroPrev');
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);

        // Indicator click event listeners
        indicators.forEach(function(indicator) {
            indicator.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                showSlide(index);
            });
        });

        // Auto-advance slides every 5 seconds
        setInterval(nextSlide, 5000);

        // Hero search bar functionality
        const heroSearchInput = document.getElementById('heroSearchInput');
        const heroSearchResults = document.getElementById('heroSearchResults');
        const searchContainer = document.querySelector('.search-container');
        const heroSearchBtn = document.querySelector('.search-btn');
        
        function renderHeroSearchResults(results) {
            if (!heroSearchResults || !heroSearchInput) return;
            if (results.length === 0 || !heroSearchInput.value.trim()) {
                heroSearchResults.style.display = 'none';
                heroSearchResults.innerHTML = '';
                return;
            }
            heroSearchResults.innerHTML = results.map(function(p, idx) {
                return '<div class="search-result-item-carousel" data-product-idx="' + idx + '">' +
                    '<img src="' + p.img + '" alt="' + p.name + '">' +
                    '<span>' + p.name + '</span>' +
                    '<span>' + p.price.toLocaleString('vi-VN') + 'đ</span>' +
                    '</div>';
            }).join('');
            heroSearchResults.style.display = 'block';
        }
        
        if (heroSearchInput) {
            heroSearchInput.addEventListener('input', function() {
                const val = this.value.trim().toLowerCase();
                if (val === '') {
                    heroSearchResults.style.display = 'none';
                    return;
                }
                const products = window.SITE && SITE.demoProducts ? SITE.demoProducts : [];
                const results = products.filter(function(p) {
                    return p.name.toLowerCase().includes(val);
                });
                renderHeroSearchResults(results);
            });

            heroSearchInput.addEventListener('focus', function() {
                if (this.value.trim() === '') {
                    heroSearchResults.style.display = 'none';
                }
            });
        }

        if (heroSearchResults) {
            heroSearchResults.addEventListener('click', function(e) {
                var item = e.target.closest('.search-result-item-carousel');
                if (item) {
                    var idx = parseInt(item.getAttribute('data-product-idx'));
                    var products = window.SITE && SITE.demoProducts ? SITE.demoProducts : [];
                    var product = products[idx];
                    if (product) {
                        localStorage.setItem('currentProduct', JSON.stringify(product));
                        window.location.href = 'TheSanpham.html';
                    }
                }
            });
        }

        document.addEventListener('click', function(e) {
            if (searchContainer && !searchContainer.contains(e.target)) {
                if (heroSearchResults) {
                    heroSearchResults.style.display = 'none';
                }
            }
        });
        
        if (heroSearchBtn) {
            heroSearchBtn.addEventListener('click', function() {
                const searchTerm = heroSearchInput.value.trim();
                if (searchTerm) {
                    const products = window.SITE && SITE.demoProducts ? SITE.demoProducts : [];
                    const results = products.filter(function(p) {
                        return p.name.toLowerCase().includes(searchTerm.toLowerCase());
                    });
                    
                    if (results.length > 0) {
                        localStorage.setItem('currentProduct', JSON.stringify(results[0]));
                        window.location.href = 'TheSanpham.html';
                    } else {
                        alert('No products found');
                    }
                }
            });
        }

        if (heroSearchInput) {
            heroSearchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    const searchTerm = this.value.trim();
                    if (searchTerm) {
                        const products = window.SITE && SITE.demoProducts ? SITE.demoProducts : [];
                        const results = products.filter(function(p) {
                            return p.name.toLowerCase().includes(searchTerm.toLowerCase());
                        });
                        
                        if (results.length > 0) {
                            localStorage.setItem('currentProduct', JSON.stringify(results[0]));
                            window.location.href = 'TheSanpham.html';
                        } else {
                            alert('No products found');
                        }
                    }
                }
            });
        }

        // Carousel drag/swipe functionality
        const heroSection = document.querySelector('.hero');
        let isDragging = false;
        let startX = 0;
        let dragThreshold = 50; // Minimum drag distance to trigger slide change

        if (heroSection) {
            heroSection.addEventListener('mousedown', function(e) {
                isDragging = true;
                startX = e.clientX;
                // Reset auto-advance timer on interaction
                if (window.carouselAutoTimer) {
                    clearInterval(window.carouselAutoTimer);
                }
            });

            document.addEventListener('mousemove', function(e) {
                if (!isDragging) return;
            });

            document.addEventListener('mouseup', function(e) {
                if (!isDragging) return;
                isDragging = false;

                const endX = e.clientX;
                const diff = startX - endX;

                // Drag right (negative diff) = previous slide
                if (diff < -dragThreshold) {
                    prevSlide();
                }
                // Drag left (positive diff) = next slide
                else if (diff > dragThreshold) {
                    nextSlide();
                }

                // Restart auto-advance after 5 seconds
                if (window.carouselAutoTimer) {
                    clearInterval(window.carouselAutoTimer);
                }
                window.carouselAutoTimer = setInterval(nextSlide, 5000);
            });
        }

        // Store auto-timer for carousel
        if (window.carouselAutoTimer) {
            clearInterval(window.carouselAutoTimer);
        }
        window.carouselAutoTimer = setInterval(nextSlide, 5000);
    });


})(window);
// Hamburger menu toggle for mobile navigation
document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger-menu');
    var nav = document.querySelector('nav');
    
    if (hamburger && nav) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        nav.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('header')) {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            }
        });
    }
});
