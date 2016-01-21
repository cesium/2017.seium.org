angular.module('sei-app',['angular-carousel'])
.controller('eventCtrl',['$scope','$rootScope',function($scope,$rootScope){
    $scope.eventSlides = [
        {file:'events/14-fev.html', day:'14 Fev', weekday:'Sábado'},
        {file:'events/16-fev.html', day:'16 Fev', weekday:'Segunda'},
        {file:'events/17-fev.html', day:'17 Fev', weekday:'Terça'},
        {file:'events/18-fev.html', day:'18 Fev', weekday:'Quarta'},
        {file:'events/19-fev.html', day:'19 Fev', weekday:'Quinta'},
        {file:'events/20-fev.html', day:'20 Fev', weekday:'Sexta'},
        {file:'events/21-fev.html', day:'21 Fev', weekday:'Sábado'},
    ];
    $scope.carouselEvents = 0;
    var counter = 0;
    $scope.marteladaIncludeFeito = function(){
        counter++;
        if (counter=== $scope.eventSlides.length){
            window.marteladaRefresh();
        }
    }

    $rootScope.eventGoto = function(page){
        $scope.carouselEvents = page;
    }
}])
.controller('speakerCtrl',['$scope','$window','$rootScope',function($scope,$window,$rootScope){
     var speakers =
        // slide 01#
        [
            {pic:'img/speakers/tmike_hackconeu.jpg', name:'Mike Elsmore', position:'Developer Advocate' , enterprise:[{name:'IBM', enterpriseUrl:'https://www.ibm.com/us-en/'}], web:'https://developer.ibm.com/clouddataservices/author/mike-elsmore/' , twitter:'https://twitter.com/ukmadlz', github:'https://github.com/ukmadlz',
                about:'ike spends his days as Developer Advocate at IBM Cloud Data Services, using his time to share knowledge on rapid development and different databases. Most of the time he can be found in the middle of a prototype in some combination of JavaScript, server tech and odd API\'s. Mike also happens to be an active part of the hacker subculture, taking part in hackathons and development conferences.'},
            {pic:'img/speakers/joaosilva.jpg', name:'Luís Fonseca', position:'Lead Interactive Developer' , enterprise:[{name:'X-Team',enterpriseUrl:'http://x-team.com/'}], web:'http://luispedrofonseca.com/' , twitter:'https://twitter.com/lpfonseca', github:'',
                about:'Com mais de uma década de experiência num leque muito variado de tecnologias, desde Unity a Objective-C passando pelo Javascript e Flash, focou-se fortemente, nos últimos anos, em desenvolvimento de jogos e aplicações mobile. Faz parte da X-Team desde 2008 onde trabalha, em parceria, para empresas como RIOT Games, Dreamworks, FOX Broadcasting, Microsoft, etc., criando projectos que alcançam todos os dias milhões de utilizadores.'},
            {pic:'img/speakers/fmendes.jpg', name:'Francisco Mendes', position:'Entrepreneur & Creator' , enterprise:[{name:'Bee Very Creative',  enterpriseUrl:'https://beeverycreative.com/'}], web:'https://www.beeverycreative.com' , twitter:'https://twitter.com/fmendes75/', github:'',
                about:'Empreendedor apaixonado por tecnologia. Licenciado em Engenharia Electrónica e Telecomunicações e pós-graduado em Engenharia de Automação Industrial, ambos pela Universidade de Aveiro, começou a sua carreira profissional como Engenheiro de I&D e posteriormente como diretor de Hardware. No final de 2010, juntou-se a Jorge Pinto e fundaram a bitBOX Electronic Systems na incubadora de empresas da Universidade de Aveiro, que mais tarde tornou-se na BEEVERYCREATIVE, a empresa que criou a primeira impressora 3D portuguesa.'},

        ];

        $scope.$watch(function(){
            return $window.innerWidth;
        }, function(value) {
            if ($window.innerWidth < 768) {
                $scope.speakerSlides = [];
                for (var i = 0; i< speakers.length; i++) {
                    $scope.speakerSlides.push([speakers[i]]);
                };
            } else {
                $scope.speakerSlides = [];
                for (var i = 0; i< speakers.length; i = i + 3) {
                    $scope.speakerSlides.push([]);
                };
                for (var i = 0; i< speakers.length; i++) {
                    $scope.speakerSlides[Math.trunc(i/3)].push(speakers[i]);
                };
            }
        });

    $rootScope.speakerGoto = function(speakerName){
        for (var i = $scope.speakerSlides.length - 1; i >= 0; i--) {
            for (var j = $scope.speakerSlides[i].length - 1; j >= 0; j--) {
                if ($scope.speakerSlides[i][j].name === speakerName) {
                    $scope.carouselSpeakers = i;
                }
            };
        };
    }
    $scope.carouselSpeakers = 0;
}])

.controller('organizationCtrl',['$scope','$window',function($scope,$window){
    var staffs= [
        // slide 01#
            {pic: 'img/staff/asantos.jpg', name:'André Santos', position: 'Presidente', enterprise: 'Minho', facebook:'', twitter: 'https://twitter.com/62Gerente', github: 'https://github.com/62Gerente',linkedin:'http://pt.linkedin.com/in/62gerente'},
            {pic: 'img/staff/mpinto.jpg', name:'Miguel Pinto', position: 'Vice Presidente', enterprise: 'Minho', facebook:'https://www.facebook.com/mcpinto98', twitter: '', github: 'https://github.com/miguelpinto98',linkedin:'https://pt.linkedin.com/in/miguelpinto98'},
            {pic: 'img/staff/pduarte.jpg', name:'Pedro Duarte', position: 'Vice Presidente', enterprise: 'Minho', facebook:'https://www.facebook.com/pedrodpduarte870', twitter: 'https://twitter.com/pedroduarte870', github: 'https://github.com/pedroduarte870',linkedin:''},
            {pic: 'img/staff/pmaia.jpg', name:'Pedro Maia', position: 'Tesoureiro', enterprise: 'Minho', facebook:'', twitter: '', github: 'https://github.com/PedroMaia',linkedin:'https://pt.linkedin.com/in/maiarib'},
            {pic: 'img/staff/pbarros.jpg', name:'Patrícia Barros', position: 'Secretária', enterprise: 'Minho', facebook:'', twitter: '', github: 'https://github.com/7patricia',linkedin:'https://pt.linkedin.com/in/7patricia'},
            {pic: 'img/staff/fmendes.jpg', name:'Fernando Mendes', position: 'Diretor do Centro de Apoio ao Open Source', enterprise: 'Minho', facebook:'', twitter: 'https://twitter.com/fribmendes', github: 'https://github.com/frmendes',linkedin:'https://pt.linkedin.com/in/fribmendes'},
            {pic: 'img/staff/maragao.jpg', name:'Martinho Aragão ', position: 'Vice Diretor do Centro de Apoio ao Open Source', enterprise: 'Minho', facebook:'', twitter: 'https://twitter.com/martinhoaragao', github: 'https://github.com/martinhoaragao',linkedin:'https://pt.linkedin.com/in/martinhoaragao'},
            {pic: 'img/staff/fneves.jpg', name:'Francisco Neves', position: 'Diretor do Departamento Pedagógico', enterprise: 'Minho', facebook:'', twitter: 'https://twitter.com/fntneves', github: 'https://github.com/fntneves',linkedin:'https://www.linkedin.com/in/fntneves'},
            {pic: 'img/staff/fgomes.jpg', name:'Fábio Gomes', position: 'Vice Diretor do Departamento Pedagógico', enterprise: 'Minho', facebook:'', twitter: 'https://twitter.com/SHIFTBASIC', github: 'https://github.com/MrFabio',linkedin:'https://www.linkedin.com/profile/view?id=353827731'},
            {pic: 'img/staff/tcunha.png', name:'Tiago Cunha', position: 'Diretor do Departamento Recreativo', enterprise: 'Minho', facebook:'https://www.facebook.com/Apocalipse.113', twitter: '', github: '',linkedin:''},
            {pic: 'img/staff/pfaria.jpg', name:'Pedro Faria', position: 'Vice Diretor do Departamento Recreativo', enterprise: 'Minho', facebook:'https://www.facebook.com/NoventaESeis', twitter: '', github: '',linkedin:''},
            {pic: 'img/staff/ggoncalves.jpg', name:'Gil Gonçalves', position: 'Vice Diretor do Departamento Recreativo', enterprise: 'Minho', facebook:'https://www.facebook.com/gil.goncalves.161', twitter: '', github: '',linkedin:''},
            {pic: 'img/staff/foliveira.jpg', name:'Filipe Oliveira', position: 'Diretor do Departamento de Comunicação e Imagem', enterprise: 'Minho', facebook:'https://www.facebook.com/filipecosta.90', twitter: '', github: '',linkedin:''},
            {pic: 'img/staff/mmedeiros.jpg', name:'Mariana Medeiros', position: 'Vice Diretora do Departamento de Comunicação', enterprise: 'Minho', facebook:'https://www.facebook.com/mim063', twitter: '', github: 'https://github.com/Mariana63',linkedin:'https://pt.linkedin.com/in/mariana63medeiros'},
            {pic: 'img/staff/jsimao.jpg', name:'Jorge Simão', position: 'Vice Diretor do Departamento de Imagem', enterprise: 'Minho', facebook:'', twitter: '', github: '',linkedin:'http://pt.linkedin.com/in/jorgepedrosimao'},
            {pic: 'img/staff/psousa.jpg', name:'Paulo Sousa', position: 'Diretor do Dep. de Relações Externas e Parcerias', enterprise: 'Minho', facebook:'https://www.facebook.com/34chronos', twitter: '', github: 'https://github.com/prsousa',linkedin:''},
            {pic: 'img/staff/msantos.jpg', name:'Mário Santos', position: 'Vice Diretor do Dep. de Relações Externas e Parcerias', enterprise: 'Minho', facebook:'', twitter: 'https://twitter.com/MarioSantos125', github: 'https://github.com/Galay125',linkedin:'https://lnkd.in/A7mvHm'},
            {pic: 'img/staff/spinto.jpg', name:'Serafim Pinto', position: 'Vogal', enterprise: 'Minho', facebook:'', twitter: '', github: 'https://github.com/serafimpinto',linkedin:'http://pt.linkedin.com/in/serafimpinto'},
            {pic: 'img/staff/pcarneiro.jpg', name:'Pedro Carneiro', position: 'Vogal', enterprise: 'Minho', facebook:'https://www.facebook.com/pedrosfdcarneiro', twitter: 'https://twitter.com/pedrosfdc', github: 'https://github.com/pedrosfdcarneiro',linkedin:''},
            {pic: 'img/staff/sferreira.jpg', name:'Sandra Ferreira', position: 'Vogal', enterprise: 'Minho', facebook:'https://www.facebook.com/sandra.ferreira.96742', twitter: '', github: '',linkedin:''},
            {pic: 'img/staff/mleite.jpg', name:'Mário Leite', position: 'Vogal', enterprise: 'Minho', facebook:'https://www.facebook.com/mario.leite.80', twitter: '', github: 'https://github.com/maleite',linkedin:'https://www.linkedin.com/in/marioleite80'},
            {pic: 'img/staff/dcarvalho.jpg', name:'Daniel Carvalho', position: 'Assembleia Geral', enterprise: 'Minho', facebook:'', twitter: 'https://twitter.com/dapcarvalho/', github: 'https://github.com/Insatisfeito',linkedin:'https://pt.linkedin.com/in/dapcarvalho/'},
            {pic: 'img/staff/rbranco.jpg', name:'Ricardo Branco', position: 'Assembleia Geral', enterprise: 'Minho', facebook:'https://www.facebook.com/ricardobranco28', twitter: '', github: 'https://github.com/ricardobranco',linkedin:''},
            {pic: 'img/staff/apimenta.jpg', name:'André Pimenta', position: 'Conselho Fiscal', enterprise: 'Minho', facebook:'https://www.facebook.com/pimenta53', twitter: '', github: '',linkedin:''},
            {pic: 'img/staff/pleite.jpg', name:'Pedro Leite', position: 'Conselho Fiscal', enterprise: 'Minho', facebook:'', twitter: 'https://twitter.com/pmcleite', github: 'https://github.com/pmcleite',linkedin:'https://www.linkedin.com/in/pmcleite'},
            {pic: 'img/staff/roliveira.jpg', name:'Rui Oliveira', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/rui.oliveiras', twitter: '', github: 'https://bitbucket.org/ruioliveiras',linkedin:''},
            {pic: 'img/staff/jcosta.jpg', name:'João Costa', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/arnaldo.asturias.9', twitter: '', github: 'https://github.com/joaofcosta',linkedin:''},
            {pic: 'img/staff/pcardoso.jpg', name:'Paulo Cardoso', position: 'Membro', enterprise: 'Minho', facebook:'', twitter: 'https://twitter.com/HeadlessHeader', github: 'https://github.com/pcardosolei',linkedin:'https://pt.linkedin.com/in/pcardosolei/'},
            {pic: 'img/staff/jarantes.jpg', name:'Joana Arantes', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/joana.arantes.10', twitter: '', github: 'https://github.com/joanaarantes',linkedin:''},
            {pic: 'img/staff/smendes.jpg', name:'Susana Mendes', position: 'Membro', enterprise: 'Minho', facebook:'', twitter: 'https://twitter.com/Su__Mendes', github: '',linkedin:'https://www.linkedin.com/pub/susana-mendes/43/8b8/906'},
            {pic: 'img/staff/bferreira.jpg', name:'Bruno Ferreira', position: 'Membro', enterprise: 'Minho', twitter: 'https://twitter.com/chalkos', github: 'https://github.com/chalkos',linkedin:'https://pt.linkedin.com/in/chalkos'},
            {pic: 'img/staff/pcosta.jpg', name:'Pedro Costa', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/pedrocosta92', twitter: 'https://twitter.com/santosk20', github: 'https://github.com/santosk20',linkedin:''},
            {pic: 'img/staff/dlemos.jpg', name:'Diana Lemos', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/dianaguimaraes57', twitter: '', github: 'https://github.com/dianalemos',linkedin:'https://www.linkedin.com/profile/view?id=227209565&trk=nav_responsive_tab_profile'},
            {pic: 'img/staff/psilva.jpg', name:'Pedro Silva', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/miguelsilvaface', twitter: '', github: 'https://github.com/pedroSilva4',linkedin:'http://pt.linkedin.com/pub/pedro-silva/a2/7ab/769'},
            {pic: 'img/staff/daraujo.jpg', name:'Duarte Araújo', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/Duarte.Araujo1', twitter: 'https://twitter.com/PMDAraujo', github: 'https://github.com/PMDA',linkedin:''},
            {pic: 'img/staff/csilva.jpg', name:'Cátia Silva', position: 'Press', enterprise: 'Minho', facebook:'https://www.facebook.com/catia.sf.silva', twitter: '', github: '',linkedin: 'http://pt.linkedin.com/in/catiasilva7/pt'},
            {pic: 'img/staff/dduarte.jpg', name:'Duarte Duarte', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/duknust', twitter: '', github: 'https://github.com/duknust',linkedin: 'http://pt.linkedin.com/in/duarteduarte'},
            {pic: 'img/staff/hgoncalves.jpg', name:'Hélder Gonçalves', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/helderjosegoncalves', twitter: '', github: 'https://github.com/HelderGoncalves92',linkedin: 'https://www.linkedin.com/in/helderjagoncalves'},
    ];/*
*/

    // $scope.staffSlides
    $scope.$watch(function(){
        return $window.innerWidth;
    }, function(value) {
            if ($window.innerWidth < 768) {
            $scope.staffSlides = [[]];
            var  slidePos= 0,slidei = 0; // slidePos the position in the slide, slidei the index of the slide
            for (var staffi = 0; staffi< staffs.length; staffi++) {
                $scope.staffSlides[slidei].push(staffs[staffi]);
                if (slidePos<11){
                    slidePos++;
                } else if(staffi< staffs.length - 1) {
                    slidePos = 0;
                    slidei++;
                    $scope.staffSlides.push([]);
                }
            };
        } else {
            $scope.staffSlides = [[]];
            var  slidePos = 0, slidei = 0; // slidePos the position in the slide, slidei the index of the slide
            for (var staffi = 0; staffi< staffs.length; staffi++) {
                $scope.staffSlides[slidei].push(staffs[staffi]);

                if (slidePos<17){
                    slidePos++;
                } else if(staffi< staffs.length - 1){
                    slidePos = 0;
                    slidei++;
                    $scope.staffSlides.push([]);
                }
            };
        }
        $scope.carouselOrganization = 0;
    });

    $scope.carouselOrganization = 0;
}]);
