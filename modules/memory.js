(function(){
    var modules={
        //the following are all memory tasks
        "e-kss-data":	  		                {url:"$A/modules/m/memory-tasks/kss-data.html",Table:"20008513",form_module:"e-kss-form"},
        "e-kss-form":	  		                {url:"$A/modules/m/memory-tasks/kss-form.html",Table:"20008513"},
        "e-psqi-data":	  		                {url:"$A/modules/m/memory-tasks/psqi-data.html",Table:"20008519",form_module:"e-psqi-form"},
        "e-psqi-form":	  		                {url:"$A/modules/m/memory-tasks/psqi-form.html",Table:"20008519"},
        "e-isi-data":	  		                {url:"$A/modules/m/memory-tasks/isi-data.html",Table:"20008518",form_module:"e-isi-form"},
        "e-isi-form":	  		                {url:"$A/modules/m/memory-tasks/isi-form.html",Table:"20008518"},
        "e-ess-data":	  		                {url:"$A/modules/m/memory-tasks/ess-data.html",Table:"20008517",form_module:"e-ess-form"},
        "e-ess-form":	  		                {url:"$A/modules/m/memory-tasks/ess-form.html",Table:"20008517"},
        "m-kss-data":	  		                {url:"$A/modules/m/memory-tasks/kss-data.html",Table:"20008515",form_module:"m-kss-form"},
        "m-kss-form":	  		                {url:"$A/modules/m/memory-tasks/kss-form.html",Table:"20008515"},
        "o-dass-data":	  		                {url:"$A/modules/m/memory-tasks/dass-data.html",Table:"20010692",form_module:"o-dass-form"},
        "o-dass-form":	  		                {url:"$A/modules/m/memory-tasks/dass-form.html",Table:"20010692"},
        "o-gds-data":	  		                {url:"$A/modules/m/memory-tasks/gds-data.html",Table:"20010693",form_module:"o-gds-form"},
        "o-gds-form":	  		                {url:"$A/modules/m/memory-tasks/gds-form.html",Table:"20010693"},
        "o-hads-data":	  		                {url:"$A/modules/m/memory-tasks/haads-data.html",Table:"20009292",form_module:"o-hads-form"},
        "o-hads-form":	  		                {url:"$A/modules/m/memory-tasks/haads-form.html",Table:"20009292"},
    }
    for(m in modules){$vm.module_list[m]=modules[m];}
})();
